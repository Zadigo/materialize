<template>
    <header>
        <div class="navbar-fixed">
            <NavBar />
        </div>

        <Sidebar />
    </header>
</template>

<script>
import NavBar from "@/components";
import Sidebar from "@/components/"
import DropDown from "@/components"

export default {
    components: {
       NavBar,
       Sidebar,
       DropDown
    }
}
</script>
