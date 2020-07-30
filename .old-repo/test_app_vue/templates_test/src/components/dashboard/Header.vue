<template>
    <header>
        <div class="header-wrapper">
            <ul class="header-links">
                <li>
                    <a href="http://">Test</a>
                </li>
                <li>
                    <a href="http://">Settings</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
#dashboard {
    $primary: white;

    header {
        background-color: $primary;
        width: 100%;
        height: auto;
        padding: .400rem;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);

        .header-wrapper {
            ul {
                margin: 0;

                li {
                    display: inline-block;
                    padding: .695rem;
                    cursor: pointer;
                    transition: all .2s ease-in-out;

                    a {
                        text-decoration: none;
                        @if $primary == white {
                            color: black;
                        } @else {
                            color: white;
                        }
                        
                    }

                    &:hover {
                        background-color: red;
                    }
                }
            }
        }
    }
}
</style>

