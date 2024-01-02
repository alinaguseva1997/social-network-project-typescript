import React, {ReactNode} from 'react';
import {UsersPageType, UsersType} from "../../redux/redux-store";
import s from './Users.module.css'
import axios from "axios";

export type UsersPropsType =UsersPageType & {
    follow: (userID: number)=>void
    unfollow: (userID: number)=> void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    children?: ReactNode
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged (pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
                <div>
                    <div>
                        {pages.map(p => {
                            return <span onClick={(e)=>this.onPageChanged(p)}
                                         className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                        })}
                    </div>
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
}

export default Users