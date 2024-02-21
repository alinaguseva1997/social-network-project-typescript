import React, {ChangeEvent} from 'react';
import {KeyboardEvent} from "react";

export type ProfileStatusPropsType = {
    status: string
    updateUserStatusTC: (status: string) => void
}
class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status,
    } // аналог useState
    activateEditMode = () => {
        this.setState({editMode: true}) //setState - асинхронный
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    deActivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateUserStatusTC(this.state.status)
    } // в классовых компонентах все обработчики событий это методы
    onKeyDownHandler = (e: KeyboardEvent<HTMLSpanElement>) => {
      if (e.key === 'Enter') {
          this.setState({editMode: false})
          this.props.updateUserStatusTC(this.state.status)
      }
    }
    componentDidUpdate(prevProps:ProfileStatusPropsType, prevState: ProfileStatusPropsType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            {this.state.editMode ?
                <div>
                    <input type="text"
                           value={this.state.status}
                           autoFocus
                           onKeyDown={this.onKeyDownHandler}
                           onBlur={this.deActivateEditMode}
                           onChange={this.onStatusChange}/>
                </div>
                : <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                </div>

            }
        </>
    }
};
export default ProfileStatus;
