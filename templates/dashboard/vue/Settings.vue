<template>
    <div class="row">
        <div class="col s12 m12 l8 offset-l2">
            <div class="settings-group">
                {% comment "notifications" %}
                <div class="setting">
                    Notifications
                    <div class="switch right">
                        <label>
                            <input type="checkbox">
                            <span class="lever"></span>
                        </label>
                    </div>
                </div>
                {% endcomment %}
    
                <ul class="collapsible">
                    <li>
                        <div class="collapsible-header">
                            <i class="material-icons">add_photo_alternate</i>
                            {% trans "Identité visuelle" %}
                        </div>
                        <div class="collapsible-body">
                            <div class="row">
                                <div class="col s4 m4 l4">
                                    <img src="https://s3.eu-west-3.amazonaws.com/jobswebsite/media/avatars/avatar3.png" class="responsive-img" alt="">
                                </div>
                                <div class="col s8 m8 l8">
                                    <div class="file-field input-field">
                                        <div class="btn">
                                            <span>Logo</span>
                                            <input type="file">
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text">
                                        </div>
                                    </div>
                                    <p>{% trans "Taille maximale 200x200px au format .PNG" %}</p>
                                    <!-- <p><div class="btn-large" id="test">Press</div></p> -->
                                </div>
                            </div>
                            <!-- <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio">
                                    <span>Test</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio">
                                    <span>Female</span>
                                </label>
                            </p> -->
                        </div>
                    </li>
            
                    <li>
                        <div class="collapsible-header">
                            <i class="material-icons">store</i>
                            {% trans "Description entreprise" %}
                        </div>
                        <div class="collapsible-body">
                            <div class="row">
                                <p>
                                    Les données qui seront inscrites ici apparaîtront sur les détails
                                    de votre offre. Soyez concis afin de capter l'attention du candidat.
                                    <a href="" target="_blank" rel="noopener noreferrer">{% trans "En savoir plus" %}.</a>
                                </p>
                            </div>
                            <div class="row">
                                <div class="col s12 m12 l12">
                                    <form id="details_form">
                                        {% csrf_token %}
                                        {% for field in details_form %}
                                            <div class="input-field">
                                                {{ field }}
                                            </div>
                                        {% endfor %}
                                        <button type="submit" class="btn waves-effect waves-light light-blue darken-1"
                                                    onclick="M.toast({html: 'Données mis à jour'})">
                                            <i class="material-icons left">check</i>
                                            {% trans "Valider" %}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </li>
    
                    {% comment "addresse" %}
                    <li>
                        <div class="collapsible-header">Addresse</div>
                        <div class="collapsible-body">
                            <div class="row">
                                <div class="input-field col s8">
                                    <input id="address" type="text" class="validate">
                                    <label for="address" class="">Address</label>
                                </div>
                                <div class="input-field col s4">
                                    <input id="city" type="text" class="validate">
                                    <label for="city" class="">City</label>
                                </div>
                                <div class="input-field col s4">
                                    <input id="state" type="text" class="validate">
                                    <label for="state">State</label>
                                </div>
                                <div class="input-field col s4">
                                    <input id="zip" type="text" class="validate">
                                    <label for="zip">Zip Code</label>
                                </div>
                                <div class="input-field col s4">
                                    <input id="country" type="text" class="validate">
                                    <label for="country">Country</label>
                                </div>
                                <div class="btn" id="addresse">Valider</div>
                            </div>
                        </div>
                    </li>
                    {% endcomment %}
                </ul>
                
                {% comment "setting" %}
                <div class="setting">
                    Setting
                    <div class="right">
                        <label>
                            <input type="checkbox">
                            <span></span>
                        </label>
                    </div>
                </div>
                {% endcomment %}
            </div>
        </div>
    </div>

    {% comment "setting" %}
    <div class="row">
        <div class="col s12 m8 l8 offset-l2">
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">Notifications</div>
                    <div class="collapsible-body">
                        <p>
                            <label>
                                <input type="checkbox">
                            </label>
                            <span>Email</span>
                        </p>         
                    </div>
                </li>
            </ul>
        </div>
    </div>
    {% endcomment %}
</template>
