import React from 'react'
import { Card, CardContent, CardDescription, CardFooter } from './ui/card'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const teamMembers = [
  {
    id: 1,
    username: 'Angela Davis',
    profession: 'Developer',
    image: '/team1.png'
  },
  {
    id: 2,
    username: 'Jolly Smith',
    profession: 'Designer',
    image: '/team2.jpg'
  },
  {
    id: 3,
    username: 'Bob Johnson',
    profession: 'Manager',
    image: '/team3.jpg'
  }
]

const Team = () => {
  return (
    <div>
      <div className='flex flex-col p-10 justify-center items-center max-w-[1000px] mx-auto'>
        <h1 className='text-3xl p-4 font-bold'>Meet Our Team</h1>
        <p>
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto p-10">
        {teamMembers.map(member => (
          <Card key={member.id}>
            <CardContent>
              <Image 
                src={member.image} 
                alt={member.username} 
                width={500} 
                height={500} 
                className='w-full '
              />
            </CardContent>
            <CardDescription className='text-center'>
              <h2 className='font-bold'>{member.username}</h2>
              <p>{member.profession}</p>
            </CardDescription>
            <CardFooter className='text-[#23A6F0] text-xl flex items-center justify-center gap-x-4 p-2'>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Team
