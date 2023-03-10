import React from 'react'

export const Header = () => {

    return(
        <header>
      <h1 class="title" id="title">FCM API</h1>

      <nav class="nav-tabs" id="nav-tabs">
        <a href="#0" class="active" id="tab1">
          Most Recent
          <span>!</span>
        </a>
        <a href="#0" id="tab2">
          Overall
          <span>!</span>
        </a>
      </nav>
    </header>
    )
}