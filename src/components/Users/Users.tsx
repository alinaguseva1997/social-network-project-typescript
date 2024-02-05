import s from "./Users.module.css";
import React, {ReactNode} from "react";
import {UsersPageType} from "../../redux/redux-store";
import {NavLink} from "react-router-dom";
import user from "../../images/user.svg"
import {usersAPI} from "../../api/api";

export type UsersTypeProps = UsersPageType & {
    onPageChanged: (currentPage: number) => void
    follow: (userID: number)=>void
    unfollow: (userID: number)=> void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
}

export const Users = (props: UsersTypeProps) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} onClick={(e)=>props.onPageChanged(p)}
                                 className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                })}
            </div>
            {
                props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img className={s.photo} src={el.photos.small === null ? user : el.photos.small} alt={''}/>
                            </NavLink>
                        </div>
                        <div>
                            {el.followed ?
                                <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, el.id)
                                    usersAPI.unfollow(el.id)
                                        .then((data) => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(el.id)
                                            }
                                            props.toggleFollowingProgress(false, el.id)
                                        })
                                }}>Follow</button>
                                : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, el.id)
                                    usersAPI.follow(el.id)
                                        .then((data) => {
                                            if (data.resultCode === 0) {
                                                props.follow(el.id)
                                            }
                                            props.toggleFollowingProgress(false, el.id)
                                        })
                                }}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                        </span>
                    </span>
                </div> )
            }
        </div>
    )
}