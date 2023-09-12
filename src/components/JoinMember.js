import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { SERVER_URL } from '../constants';

function JoinMember(props) {
    const [ open, setOpen ] = useState(false);
    //인풋 입력값 상태관리
    const [member, setMember] = useState({
        userid: "",
        userpw: "",
        email: "",
        role: "USER"
    });
    const handleChange =(e)=> {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        })
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setMember({
            userid: "",
            userpw: "",
            email: "",
            role: "USER"
        })
    }
    const handleSave = () => {
        addMember(member);
        handleClose();
    }
    //추가하기
    const addMember = (member) => {
        fetch(SERVER_URL+"member/join", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(member)
        })
        .then(response => {
            if(response.ok) {
                alert("등록되었습니다.");
            } else {
                alert("등록되지 않았습니다.");
            }
        })
        .catch(e=>console.log(e))
    }
    return (
        <div>
            <Button variant='contained' onClick={handleOpen}>회원 가입</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                // 모달창 크기 크게
                aria-describedby="alert-dialog-description" maxWidth="sm" fullWidth={true}>
                <DialogTitle>회원 가입</DialogTitle>
                <DialogContent>
                    <input placeholder='Userid' name="userid" value={member.userid} onChange={handleChange} 
                    style={{width: "90%", padding: "10px", margin: "6px"}} />
                    <br/> 
                    <input type="password" placeholder='Userpw' name="userpw" value={member.userpw} onChange={handleChange} 
                    style={{width: "90%", padding: "10px", margin: "6px"}}/>
                    <br/> 
                    <input placeholder='Email' name="email" value={member.email} onChange={handleChange} 
                    style={{width: "90%", padding: "10px", margin: "6px"}}/>
                </DialogContent> 
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>  
                    <Button onClick={handleSave}>Save</Button>  
                </DialogActions>       
            </Dialog>
        </div>
    );
}

export default JoinMember;