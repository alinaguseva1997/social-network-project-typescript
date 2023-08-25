import React from 'react';
import {UsersType} from "../../redux/redux-store";
import s from './Users.module.css'

export type UsersPropsType = {
    users: UsersType[]
    follow: (userID: number)=>void
    unfollow: (userID: number)=> void
    setUsers: (users: UsersType[]) => void
}
export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
    props.setUsers([{
        id: 1,
        photoURL: 'https://www.womanhit.ru/media/CACHE/images/articleimage2/2023/6/img3859/2eace2473d3dde3bf1a8aae27844e6b6.jpeg',
        followed: false,
        fullName: 'Dmitry',
        status: 'I like football',
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }
    },
        {
            id: 2,
            photoURL: 'https://www.womanhit.ru/media/CACHE/images/articleimage2/2023/6/img3859/2eace2473d3dde3bf1a8aae27844e6b6.jpeg',
            followed: true,
            fullName: 'Ivan',
            status: 'I am a student',
            location: {
                city: 'Brest',
                country: 'Belarus'
            }
        },
        {
            id: 3,
            photoURL: 'https://www.womanhit.ru/media/CACHE/images/articleimage2/2023/6/img3859/2eace2473d3dde3bf1a8aae27844e6b6.jpeg',
            followed: false,
            fullName: 'Andrew',
            status: 'I am a engineer',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        }])
    } // нежелательный side-effect чистой функции, которого быть не должно, т.к. чистая функция должна при ее вызове возвращать разметку, а не диспатчить что-то.
    return (
        <div>
            {
                props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={el.photoURL} />
                        </div>
                        <div>
                            {el.followed ?
                                <button onClick={() => {props.unfollow(el.id)}}>Follow</button>
                                : <button onClick={() => props.follow(el.id)}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>
                </div> )
            }
        </div>
    );
};

