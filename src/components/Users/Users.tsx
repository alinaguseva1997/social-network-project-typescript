import s from "./Users.module.css";
import React from "react";
import {UsersPageType} from "../../redux/redux-store";

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
        console.log(pages)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e)=>props.onPageChanged(p)}
                                 className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                })}
            </div>
            {
                props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={el.photoURL} alt = {''}/>
                        </div>
                        <div>
                            {el.followed ?
                                <button onClick={() => props.unfollow(el.id)}>Follow</button>
                                : <button onClick={() => props.follow(el.id)}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{'el.fullName'}</div>
                            <div>{'el.status'}</div>
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