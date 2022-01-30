<script>
    import Nav from "../components/nav.svelte";

</script>

<!-- Padding of 8 all arround; maxwidth of 6xl; center all children-->
<div class="p-8 mx-w-6xl max-auto">
    <Nav/>
    <!-- Navigation bar above page componentes (slots)-->
    <slot>
        

    </slot>
</div>

<!-- Include the basic styles of Tailwind css in every page-->
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>