<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>