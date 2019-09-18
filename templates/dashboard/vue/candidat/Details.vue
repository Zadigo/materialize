<template>
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

</template>

<script>
export default {
    props: ['user_profile']
}
</script>
