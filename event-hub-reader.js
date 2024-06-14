body {
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
    padding: 50px;
    margin: 0;
    text-align: center;
  }
  
  .flexHeader {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  
  a {
    color: #00B7FF;
  }
  
  body select {
    padding: 10px 70px 10px 13px;
    max-width: 100%;
    height: auto;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
    background: url("https://i.ibb.co/b7xjLrB/selectbox-arrow.png") right center no-repeat;
    background-color: #fff;
    color: #444444;
    line-height: 16px;
    appearance: none;
    /* this is must */ -webkit-appearance: none;
    -moz-appearance: none;
  }
  
  /* body select.select_box option */
  body select option {
    padding: 0 4px;
  }
  
  /* for Edge */
  select::-ms-expand {
    display: none;
  }
  
  select:disabled::-ms-expand {
    background: #f60;
  }
