<template>
    <table :id="id">
        <thead>
            <th v-for="a in b" :key="a">
                {{ a }}
            </th>
        </thead>

        <tbody>
            <tr v-for="c in a" :key="c">
                <td>{{ c.a }}</td>
                <td>{{ c.b }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['headers', 'items']
}
</script>
