<template>
    <transition name="sidebar">
        <div v-if="side_bar_active" class="dashboard-sidebar">
            <div class="dashboard-sidebar-wrapper">
                <ul>
                    <li>
                        <a href="http://">Test</a>
                    </li>
                    <li>
                        <a href="http://">Test</a>
                    </li>
                    <li>
                        <a href="http://">Test</a>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['side_bar_active']

}
</script>


<style lang="scss" scoped>
    .dashboard-sidebar {
        position: absolute;
        top: 0;
        left: 0;
        width: 250px;
        height: 100vh;
        background-color: aquamarine;
        z-index: -1;

        .dashboard-sidebar-wrapper {
            ul {
                li {
                    padding: 1rem;

                    a {
                        text-decoration: none;
                        color: black;
                    }
                }
            }
        }
    }

    .sidebar-enter-active, .sidebar-leave-active {
        transition: all .2s ease-in-out;
    }

    .sidebar-enter, .sidebar-leave-to {
        transform: translateX(-250px);
    }

    .sidebar-enter-to, .sidebar-leave {
        transform: translateX(0px);
    }
</style>

