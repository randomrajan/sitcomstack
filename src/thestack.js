import { FaCouch,FaRegLaughSquint, FaTruck,FaHorse,FaLaptopCode,FaCoffee,FaChessKing,FaBlackTie } from 'react-icons/fa';
import { GiStoneThrone,GiWitchFlight,GiSherlockHolmes,GiInfinity,GiFamilyHouse, GiSpartanHelmet, GiSpaceSuit,GiEternalLove,GiDramaMasks, GiCeremonialMask, GiPoliceOfficerHead,GiPoliceBadge } from 'react-icons/gi'
import { FiInstagram } from 'react-icons/fi'
import React, { Component }  from 'react';
export const thestack = [
    {
        id: 1,
        username: 'its_surajmaity',
        sitcoms: ['Peaky Blinders','The Witcher','Breaking Bad','Sherlock','Dark'],
        ratings: ["9","8","7","8","9"],
        icon: [<FaHorse />, <GiWitchFlight />, <FaTruck />, <GiSherlockHolmes />, <GiInfinity />, <FiInstagram />],
        username_link: 'https://www.instagram.com/its_surajmaity'
    },
    {
        id: 2,
        username: 'priyansh__8',
        sitcoms: ['Peaky Blinders','Mr Robot','Breaking Bad','Sherlock','Dark'],
        ratings: ["9","8","7","8","9"],
        icon: [<FaHorse />, <FaLaptopCode />, <FaTruck />, <GiSherlockHolmes />, <GiInfinity />, <FiInstagram />],
        username_link: 'https://www.instagram.com/priyansh__8',
        
    },
    {
        id: 3,
        username: 'shekhar_mandal_',
        sitcoms: ['Peaky Blinders','This is Us','Breaking Bad','Rome','Dark'],
        ratings: ["9","8","7","8","9"],
        icon: [<FaHorse />, <GiFamilyHouse />, <FaTruck />, <GiSpartanHelmet />, <GiInfinity />, <FiInstagram />],
        username_link: 'https://www.instagram.com/shekhar_mandal_',
    },
    {
        id: 4,
        username: 'h28h8_00',
        sitcoms: ['Lost in Space','Friends','Descendants of the Sun','The Royals','Beyhadh'],
        ratings: ["9","8","7","8","9"],
        icon: [<GiSpaceSuit />, <FaCoffee />, <GiEternalLove />, <FaChessKing />, <GiDramaMasks />, <FiInstagram />],
        username_link: 'https://www.instagram.com/h28h8_00',
    },
    {
        id: 5,
        username: 'iamneegam',
        sitcoms: ['Friends','Suits','Game of Thrones','Breaking Bad','Peaky Blinders'],
        ratings: ["9","8","7","8","9"],
        icon: [<FaCoffee />, <FaBlackTie />, <GiStoneThrone />, <FaTruck />, <FaHorse />, <FiInstagram />],
        username_link: 'https://www.instagram.com/iamneegam',
    },
    {
        id: 6,
        username: 'randomrajan',
        sitcoms: ['Friends','Suits','Game of Thrones','Sarabhai vs Sarabhai','That 70s Show'],
        ratings: ["9","8","7","8","9"],
        icon: [<FaCoffee />, <FaBlackTie />, <GiStoneThrone />, <FaRegLaughSquint />, <FaCouch />, <FiInstagram />],
        username_link: 'https://www.instagram.com/randomrajan',
    },
    {
        id: 7,
        username: 'shreypatel_23',
        sitcoms: ['Friends','Breaking Bad','Dark','Money Heist','Brooklyn Nine-Nine'],
        ratings: ["9","8","7","8","9"],
        icon: [<FaCoffee />, <FaBlackTie />, <FiInstagram />, <GiCeremonialMask />, <GiPoliceBadge />, <FiInstagram />],
        username_link: 'https://www.instagram.com/shreypatel_23',
    }
]

export default thestack