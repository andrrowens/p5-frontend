import React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage'
import PlantContainerApi from "./PlantContainerApi"
import PlantContainerUser from "./PlantContainerUser"
import PlantForm from "./PlantForm"
import ListingsContainer from "./ListingsContainer"
import ListingForm from "./ListingForm"
import UserCard from "./UserCard"
import UserEditForm from "./UserEditForm"
import FriendshipContainer from "./FriendshipContainer"

import UserListingsContainer from "./UserListingsContainer"

import EmailForm from "./EmailForm"
import Navbar from "./Navbar"
import Signup from './Signup';
import AuthenticatedUser from './AuthenticatedUser';
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
// import SearchBar from './SearchBar';


function App() {

const {user, setUser} = useContext(UserContext)


const [plants, setPlants] = useState([])
const [listings, setListings] = useState([])
const [users, setUsers] = useState([])
const [friendships, setFriendships] = useState([])
const [apiPlants, setApiPlants] = useState([])

useEffect(() => { // fetch plants
  const fetchPlants = async () => {
    try {
      const resp = await fetch("/plants")
      const data = await resp.json()
      setPlants(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchPlants()
}, [])


useEffect(() => { // fetch listings
  const fetchListings = async () => {
    try {
      const resp = await fetch("/listings")
      const data = await resp.json()
      setListings(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchListings()
}, [])


useEffect(() => { // fetch all users
  const fetchUsers = async () => {
    try {
      const resp = await fetch("/users")
      const data = await resp.json()
      setUsers(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchUsers()
}, [])

useEffect(() => { // fetch friendships
  const fetchFriendships = async () => {
    try {
      const resp = await fetch("/friendships")
      const data = await resp.json()
      setFriendships(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchFriendships()
}, [])


useEffect(() => { // fetch API plant data
  const fetchApiPlants = async () => {
    try {
      // const resp = await fetch(`https://perenual.com/api/species-list?page=1&key=${process.env.REACT_APP_PERENUAL_API_KEY}`) 
      const resp = await fetch("https://perenual.com/api/species-list?page=1&key=sk-tz5C63f677fa6cac6101") //    hide key
      const data = await resp.json()
      setApiPlants(data.data)
    } catch (error) {
      alert(error)
      // alert(JSON.stringify(error))
    }
  }
  fetchApiPlants()
}, [])



  return (
    <div className="App">
      <Navbar />

          <Route path="/home">
            <HomePage />
          </Route >

          <Route path="/plant_library">
            {/* <PlantContainer apiPlants={apiPlants} setApiPlants={setApiPlants} /> */}
            <PlantContainerApi apiPlants={apiPlants} setApiPlants={setApiPlants} />
          </Route >

          <Route path="/user_plants">
            {/* <PlantContainer apiPlants={apiPlants} setApiPlants={setApiPlants} /> */}
            <PlantContainerUser plants={plants} setPlants={setPlants} user={user} />
            <PlantForm setPlants={setPlants} user={user}  />
            {/* <SearchBar plants={plants}/> */}
          </Route >

          <Route path="/listings">
            <ListingsContainer listings={listings} setListings={setListings} users={users} friendships={friendships} setFriendships={setFriendships} user={user} />
            <ListingForm plants={setPlants} setListings={setListings} user={user} />
          </Route >

          <Route path="/mylistings">
            <UserListingsContainer listings={listings} setListings={setListings} user={user} />
      
          </Route >

          <Route path="/account">
            {/* <UserCard users={users} setUsers={setUsers} /> */}
            <UserCard user={user} setUser={setUser} />
            {/* <UserEditForm users={users} setUsers={setUsers} /> */}
            <UserEditForm user={user} setUser={setUser} />
          </Route >

          <Route path="/friendships">
            <FriendshipContainer friendships={friendships} setFriendships={setFriendships} users={users} />
          </Route >

          <Route path="/email">
            <EmailForm />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>


          <Route path="/authenticated_user">
            <AuthenticatedUser /> 
          </Route>


      
   </div>

  )

}

export default App;
