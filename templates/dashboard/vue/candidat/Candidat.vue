<template>
<div class="row">
    <div class="col s12 m8 l8">
        <div class="card-panel">
            <div class="row">
                <div class="col s12 m7 l7">
                    <img src="https://s3.eu-west-3.amazonaws.com/jobswebsite/media/avatars/avatar2.png" 
                        alt="avatar_candidat" class="responsive-img">
                </div>
    
                <div class="col s12 m5 l5">
                    <h5>{{ candidature.id_candidat.prenom }} {{ candidature.id_candidat.nom }}</h5>
                    <hr>            
                </div>

                <div class="col s12 m5 l5">
                    <table>
                        <tbody>
                            <tr>
                                <td><i class="material-icons">event</i></td>
                                <td>{{ user_profile.date_naissance }}</td>
                            </tr>
                            <tr>
                                <td><i class="material-icons">map</i></td>
                                <td>{{ user_profile.code_postal }}</td>
                            </tr>
                            <tr>
                                <td><i class="material-icons">contact_mail</i></td>
                                <td>{{ candidature.id_candidat.email }}</td>
                            </tr>
                            <tr>
                                <td><i class="material-icons">contact_phone</i></td>
                                <td>{{ user_profile.telephone }}</td>
                            </tr>
                        </tbody>
                    </table>        
                </div>
            </div>
            <div class="row">
                <div class="col s12 m12 l12">
                    <p>
                        {% if not candidature.statut == 'refusé' %}
                        <a class="btn-small waves-effect waves-light light-blue darken-1 modal-trigger" id="btn-action"
                            data-action="entretien" data-candidature="{{  candidature.id }}" href="#modal1">
                            <i class="material-icons left">check</i>
                            {% trans 'Entretien' %}
                        </a>
                        <a class="btn-small waves-effect waves-light light-blue darken-1 modal-trigger" id="btn-action"
                            data-action="refuser" data-candidature="{{  candidature.id }}" href="#modal2">
                            <i class="material-icons left">close</i>
                            {% trans 'Refuser' %}
                        </a>
                        {% endif %}
                
                        {% comment "Archiver" %}
                        <a href="{% url '' candidature.id_offre.id  %}?id={{ candidat.id }}" id="btn-archiver-candidature"
                            class="btn-small red darken-3">
                            <i class="material-icons left">archive</i>
                            {% trans 'Archiver' %}
                        </a>
                        {% endcomment %}
                
                        <a href="{% url 'supprimer_candidature' candidature.id_offre.id  %}?id={{ candidat.id }}"
                            id="btn-action-supprimer" class="btn-small red darken-3">
                            <i class="material-icons left">delete</i>
                            {% trans 'Supprimer' %}
                        </a>
                    </p>
                </div>

            </div>
        </div>

        {% comment "formation" %}
        <div class="card-panel">
            <h5>{% trans 'Formation' %}</h5>
            <hr>
            <table>
                <tbody>
                    <tr>
                        <td><i class="material-icons">account_balance</i></td>
                        <td>{{ user_profile.mon_ecole|upper }}</td>
                    </tr>
                    <tr>
                        <td><i class="material-icons">class</i></td>
                        <td>{{ user_profile.niveau_etude|upper }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        {% endcomment %}
    </div>

    <div class="col s12 m4 l4">    
        <div class="card-panel">
            <h6>{% trans 'Évaluer la candidature' %}</h6>
            <hr>
            <div class='rating-stars' data-offre="{{ candidature.id_offre.id }}">
                <ul id='stars'>
                    <li class='star' title='1' data-value='1'>
                        <i class='fa fa-star fa-fw'></i>
                    </li>
                    <li class='star' title='2' data-value='2'>
                        <i class='fa fa-star fa-fw'></i>
                    </li>
                    <li class='star' title='3' data-value='3'>
                        <i class='fa fa-star fa-fw'></i>
                    </li>
                    <li class='star' title='4' data-value='4'>
                        <i class='fa fa-star fa-fw'></i>
                    </li>
                    <li class='star' title='5' data-value='5'>
                        <i class='fa fa-star fa-fw'></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col s12 m4 l4">
        <div class="card">
            <div class="card-content">
                {% include "utilities/pdf_viewer.html" %}
            </div>
        </div>
    </div>
</div>

<!-- Modal Structure -->
<div id="modal1" class="modal">
    <div class="modal-content">

        <form id="entretien_form">
            <div class="row">
                {% for field in entretien_form %}
                    <div class="input-field col s12">
                        {{ field }}
                    </div>
                {% endfor %}
            </div>
            <button type="submit" class="btn-small waves-effect waves-light light-blue darken-1">
                {% trans "Valider" %}
            </button>
        </form>

    </div>
</div>

<!-- Modal Structure -->
<div id="modal2" class="modal">
        <div class="modal-content">

            <table>
                <tr>
                    <td>{% trans "Disponibilités" %}</td>
                    <td>
                        <button class="btn">Presss</button>
                    </td>
                </tr>
            </table>

        </div>
    </div>
</template>
