<template>
<header>
    <div class="navbar-fixed">
        <nav class="navbar white">
            <div class="nav-wrapper">
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <a href="#!" data-target="dropdown-notifications"><i class="material-icons">notifications</i></a>
                        <div class="dropdown-content" id="dropdown-notifications">

                        </div>    
                    </li>
                    <li>
                        <a href="#!" data-target="dropdown-settings"><i class="material-icons">settings</i></a>
                        <div class="dropdown-content" id="dropdown-settings">
                            <div class="settings-group">
                                <div class="setting">
                                    Night mode
                                    <div class="switch right" id="night-mode">
                                        <label>
                                            <input type="checkbox"><span class="lever"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <ul class="collection">
                                <li class="collection-item avatar">
                                    <img src="https://materializecss.com/images/yuna.jpg" alt="" class="circle">
                                    <span class="title">Title</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <!-- SIDEBAR -->
    <ul id="slide-out" class="sidenav sidenav-fixed has-fixed-sidenav hide-on-med-and-down">
        <li class="logo-container">
            <a href="{% url 'dashboard' %}"><i class="material-icons">spa</i>Dashboard</a>
        </li>
        {% if user.is_admin %}
            <li><a href="/admin/" target="_blank" class="red-text darken-4">Admin</a></li>
        {% endif %}
        <li><a href="{% url 'dashboard' %}">Dashboard</a></li>

        <li><div class="divider"></div></li>
        
        <li><a href="{% url 'dashboard_mes_offres' %}">{% trans 'Offres' %}</a></li>
        <li><a href="{% url 'dashboard_candidatures' %}">{% trans 'Candidatures' %}</a></li>
        {% if user.is_admin %}
            <li><a href="{% url 'dashboard_statistiques' %}">{% trans 'Statistiques' %}</a></li>
        {% endif %}
        <li><a href="{% url 'dashboard_settings' %}">{% trans 'Paramètres' %}</a></li>
    </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
    </a> 
</header>
</template>
