import React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PlantContainer from "./PlantContainer"
import ListingsContainer from "./ListingsContainer"
import ListingForm from "./ListingForm"
import PlantForm from "./PlantForm"
import UserContainer from "./UserContainer"
import UserEditForm from "./UserEditForm"
import EmailForm from "./EmailForm"
import Navbar from "./Navbar"
import Signup from './Signup';
import AuthenticatedUser from './AuthenticatedUser';

function App() {

const [plants, setPlants] = useState([])
const [listings, setListings] = useState([])
const [users, setUsers] = useState([])

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

useEffect(() => { // fetch users
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

  return (
    <div className="App">
      <Navbar />
       

          <Route path="/plants">
            <PlantContainer plants={plants} setPlants={setPlants} />
            <PlantForm setPlants={setPlants}  />
          </Route >

          <Route path="/listings">
            <ListingsContainer listings={listings} setListings={setListings} />
            <ListingForm plants={setPlants} setListings={setListings}  />
          </Route >

          <Route path="/users">
            <UserContainer users={users} setUsers={setUsers} />
            <UserEditForm users={users} setUsers={setUsers} />
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
