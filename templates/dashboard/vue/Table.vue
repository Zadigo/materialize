<template>
<div class="row">
    <div class="col s12 m12 l12">
        <div class="card-panel">
            <table class="centered">
                <thead>
                    <th>#</th>
                    <th>{% trans "Offres" %}</th>
                    <th>{% trans "Activer" %}</th>
                    <th>{% trans "Partager" %}</th>
                    <th>{% trans "Actions" %}</th>
                </thead>

                {% for offre in offres %}
                    <tr>
                        <td><a href="{% url 'dashboard_candidatures_offre' offre.id %}">{{ offre.id }}</a></td>
                        <td>{{ offre.nom_poste }}</td>
                        <td>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" data-offre="{{ offre.id }}" onchange="dataLayer.push({'title': '{{ offre.nom_poste }}'});"
                                        id="switch-activer-desactiver" {% if offre.actif %}checked{% endif %}>
                                    <span class="lever"></span>
                                </label>
                            </div>
                        </td>

                        <td>
                            <!-- Modal Trigger -->
                            <a href="#modal1" class="modal-trigger" id="btn-partager-offre" 
                                        data-url="/offres/{{ offre.id }}/" data-poste="{{ offre.nom_poste }}" 
                                            data-description="{{ offre.description_courte }}">
                                <i class="material-icons">share</i>
                            </a>
                        </td>
    
                        <td>
                            <a href="{% url 'dashboard_update_mes_offres' offre.id %}"><i class="material-icons">create</i></a>
                            {% if can_create %}
                                <a href="{%url 'dupliquer_offre' %}?offre={{ offre.id }}"><i class="material-icons">file_copy</i></a>
                            {% endif %}
                            <a href="{% url 'delete_offre' offre.id %}" data-offre="{{ offre.id }}"><i class="material-icons">delete</i></a>
                        </td>
                    </tr>
                {% endfor %}
            </table>
            <div class="csrf">{% csrf_token %}</div>
            <div class="nouvelle-offre" data-url="{% url 'nouvel_offre' %}"></div>
        </div>
    </div>
</div>
</template>
