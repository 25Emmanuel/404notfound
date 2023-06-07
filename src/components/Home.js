import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <main className='body'>
        <div className='text-container'>
            <p className='header'>404 NOT FOUND</p>
        </div>      

        <div className='badnews'>
            <div className='scarecrow'>
                <img src='Scarecrow.png' alt='scarecrow'/>
            </div>
            <div className='message'>
                <div className='message1'>
                    <h1 className='badnewstext'>I have bad news for you</h1>
                </div>
                <div className='message2'>
                    <p className='errortext'>The page you are looking for might be removed or is temporarily unavailable</p>
                </div>
                
                <Button />
            </div>
        </div>
        
        <p className='footer'>created by 25Emmanuel - devChallenges.io</p>
    </main>
  )
}

export default Home
