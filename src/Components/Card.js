import React, { useEffect, useState } from 'react'

const Card = (props) => {
    const [user, setuser] = useState('');

    useEffect(() => {
        let users = props.match.params.user;
        setuser({ users })
    }, [props.match.params.user])
    console.log(user);
    return (
        <div className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
            <h3 className='ui hearder'>{user.users}</h3>
        </div>
    )
}
export default Card;