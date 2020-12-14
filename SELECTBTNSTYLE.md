https://blog.logrocket.com/how-to-style-forms-with-css-a-beginners-guide/

Checkboxes and radio buttons

The default checkbox and radio buttons are hard to style and require more complex CSS (and HTML).

To style a checkbox, use the following HTML code.

<label>Name
  <input type="checkbox" />
  <span></span>
</label>

A few things to note:

    Since we’re using <label> to wrap the <input>, if you click any element inside <``label``>, the <input> will be clicked
    We’ll hide the <input> because browsers don’t allow us to modify it much
    <span> creates a custom checkbox
    We’ll use the input:checked pseudo-class selector to get the checked status and style the custom checkbox

Here’s a custom checkbox (see the comments in the CSS for more explanations):


Here’s a custom radio button:



<body>
  <p>What do you need?</p>
<label>Apples
  <input type="radio" name="fruit" checked/>
  <span></span>
</label>
<label>Oranges
  <input type="radio" name="fruit" />
  <span></span>
</label>
<label>Grapes
  <input type="radio" name="fruit" />
  <span></span>
</label>
</body>

body {
  margin:30px;
  font-size:18px;
}

/* container */
label {
  display:block;
  margin-bottom:4px;
  position: relative; /* to contain absolute elements */
  padding-left:30px; /* free space for custom radio button */
  cursor: pointer;
}
/* hide default radio button  */
label input[type=radio] {
  position: absolute; /* prevent taking any space */
  /* cross-browser hidingg */
  opactiy: 0;
  width:0; 
  height:0;
}
/* custom radio button */
label span {
  position: absolute;
  /* position to the free space in <label> */
  top:0;
  left:0;
  width:20px; 
  height:20px;
  background-color: #ddd;
  border-radius: 50%;
  transition: .3s background-color; /* slight transition */
}
/* the check icon */
label span:after {
  content: "";
  position: absolute;
  display: none;
  
  /* middle */
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background-color:#fff;
  width:8px;
  height:8px;
  border-radius:50%;
}
label:hover span {
  background-color: #ccc;
}

/**** Here's the trick ***/
label input:checked ~ span {
  background-color: #2eaadc;
}
label input:checked ~ span:after {
  display:block;
}



We used the same concept (input:checked) to create custom elements in both examples.

In browsers, checkboxes are box-shaped while radio buttons are round. It’s best to keep this convention in custom inputs to avoid confusing the user.