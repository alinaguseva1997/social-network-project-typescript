import s from "./Users.module.css";
import React from "react";
import {UsersPageType} from "../../redux/redux-store";
import {NavLink} from "react-router-dom";
import user from "../../images/user.svg"

export type UsersTypeProps = UsersPageType & {
    onPageChanged: (currentPage: number) => void
    followTC: (userID: number)=>void
    unfollowTC: (userID: number)=> void
}

export const Users = (props: UsersTypeProps) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i= 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} onClick={()=>props.onPageChanged(p)}
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
                                <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {props.unfollowTC(el.id)}}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {props.followTC(el.id)}}>Follow</button>}
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