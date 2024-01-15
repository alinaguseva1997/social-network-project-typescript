import s from "./Users.module.css";
import React from "react";
import {UsersPageType} from "../../redux/redux-store";
import {NavLink} from "react-router-dom";
import user from "../../images/user.svg"
import axios from "axios";

export type UsersTypeProps = UsersPageType & {
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number)=>void
    unfollow: (userID: number)=> void
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
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                        withCredentials: true,
                                    headers: {
                                            "API-KEY": "44a4436a-8c65-4104-a2a4-a52e873e68ac"
                                    }})
                                        .then((res) => {
                                            if (res.data.resultCode === 0) {
                                                props.unfollow(el.id)
                                            }
                                        })
                                }}>Follow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "44a4436a-8c65-4104-a2a4-a52e873e68ac"
                                        }})
                                        .then((res) => {
                                            if (res.data.resultCode === 0) {
                                                props.follow(el.id)
                                            }
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