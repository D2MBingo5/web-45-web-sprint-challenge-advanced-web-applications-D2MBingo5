import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';

import axiosWithAuth from "../helpers/axiosWithAuth";
import axios from "axios";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchColorService()
      .then(res => {
        setColors(res.data)
      })
      .catch(err => {console.log(err)})
  }, [])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    // console.log('edit', editColor.id, editColor.color, editColor.code.hex)
    axiosWithAuth()
      .put(`colors/${editColor.id}`, editColor)
      .then(res => {
        // Troubleshooting
        // console.log('put', res)
        // editColor.id = res.data.id
        // editColor.name = res.data.name
        // editColor.code.hex = res.data.code.hex
        setColors([
          ...colors
        ])
      })
      .catch(err => {console.log(err)})
  };

  const deleteColor = (colorToDelete) => {
    console.log('delete', colorToDelete.id)
    axiosWithAuth().delete(`colors/${colorToDelete.id}`)
      .then(res => {
        console.log(colors)
        // I'm very afraid to change the state of setColors
      })
      .catch(err => {console.log(err)})
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
