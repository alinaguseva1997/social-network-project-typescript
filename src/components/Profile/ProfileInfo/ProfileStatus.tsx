import React from 'react';
import {KeyboardEvent} from "react";

export type ProfileStatusPropsType = {
    status: string
}
class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    } // аналог useState
    activateEditMode = () => {
        this.setState({editMode: true}) //setState - асинхронный
    }
    deActivateEditMode = () => {
        this.setState({editMode: false})
    } // в классовых компонентах все обработчики событий это методы
    onKeyDownHandler = (e: KeyboardEvent<HTMLSpanElement>) => {
      if (e.key === 'Enter') {
          this.setState({editMode: false})
      }
    }

    render() {
        return <>
            {this.state.editMode ?
                <div>
                    <input type="text"
                           value={this.props.status}
                           autoFocus
                           onKeyDown={this.onKeyDownHandler}
                           onBlur={this.deActivateEditMode}/>
                </div>
                : <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>

            }
        </>
    }
};
export default ProfileStatus;
