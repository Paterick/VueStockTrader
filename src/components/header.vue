<template>
    <div>
        <ul class="nav">
        <router-link tag="li" class="nav-item" active-class="active" to="/home"><a class="nav-link">Stock Trader</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/portfolio"><a class="nav-link">Portfolio</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/stocks"><a class="nav-link">Stocks</a></router-link>
        </ul>
        <ul class="nav justify-content-end">
            <li class="nav-item"><a class="nav-link" href="#">End Day</a></li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Save & Load</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Save Data</a>
                <a class="dropdown-item" href="#">Load Data</a>
                </div>
            </li>            
        </ul>
    </div>
    <!-- <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
                </div>

                <div class="collapse navbar-collapse">
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>                    
                    <ul class="nav navbar-nav">
                        <router-link tag="li" active-class="active" to="/"><a>Stock Trader</a></router-link>
                        <router-link tag="li" active-class="active" to="/portfolio"><a>Portfolio</a></router-link>
                        <router-link tag="li" active-class="active" to="/stocks"><a>Stocks</a></router-link>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">End Day</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Save & Load
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Save Data</a>
                                <a class="dropdown-item" href="#">Load Data</a>
                            </div>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>    
    </div> -->
</template>