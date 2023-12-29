import React, {ReactNode} from 'react';
import {UsersType} from "../../redux/redux-store";
import s from './Users.module.css'
import axios from "axios";

export type UsersPropsType = {
    users: UsersType[]
    follow: (userID: number)=>void
    unfollow: (userID: number)=> void
    setUsers: (users: UsersType[]) => void
    children?: ReactNode
}

class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }
    render() {
        return (
                <div>
                    {
                        this.props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={el.photoURL} />
                        </div>
                        <div>
                            {el.followed ?
                                <button onClick={() => {this.props.unfollow(el.id)}}>Follow</button>
                                : <button onClick={() => this.props.follow(el.id)}>Unfollow</button>}
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{'el.fullName'}</div>
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
}

export default Users