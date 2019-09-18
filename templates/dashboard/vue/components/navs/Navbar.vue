<template>
    <nav class="navbar white">
        <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <a href="#!" data-target="dropdown-notifications"><i class="material-icons">notifications</i></a>

                    <DropDown />
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
</template>

<script>
import DropDown from "@/components"

export default {
   components: {
       DropDown
   }
}
</script>
