# Styling convention for JSHire

#Input filed
.inputField{
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.inputField:Hover{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.inputField:Active{

}

.btn{
  height: 2.5rem;
  border-radius: 2rem;
  border: none;
  background-color: #056FC6; /* If the button colour is blue  */
  background-color: #D52E2D; /* If the button colour is red  */
  color: white;
  font-family: 'Raleway';
  cursor: pointer;
  transition-duration: 0.4s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.btn:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.btn:active {
  background-color: #04589E;  /* If the button colour is blue  */
  background-color: #aa2424;  /* If the button colour is red  */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform: translateY(3px);
}
