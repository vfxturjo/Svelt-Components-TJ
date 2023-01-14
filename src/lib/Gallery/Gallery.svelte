<script>
import MouseLocation from "./../Comp_Utilities/mouse_location.svelte";
import HoverZoomCard from "./../Comp_Utilities/hoverZoomCard.svelte";

import { Heading, Hr } from "flowbite-svelte";
</script>

<body class="p-8">
    <Heading tag="h1">Utility components</Heading>

    <Heading tag="h3">HoverZoomCard</Heading>
    <div class="flex gap-4 justify-center">
        <HoverZoomCard dataType="hoverPics" placeholder>sefs</HoverZoomCard>
        <HoverZoomCard dataType="hoverPics" placeholder>sefs</HoverZoomCard>
        <HoverZoomCard dataType="hoverPics" placeholder>sefs</HoverZoomCard>
    </div>

    <!--  divider line -->
    <Hr class="my-8 w-1/3 bg-blue-600 opacity-50 h-2" />
    <Heading tag="h3">MouseLocation</Heading>
    <MouseLocation alwaysOnTop="{false}" />
    <!--  divider line -->
    <Hr class="my-8 w-1/3 bg-blue-600 opacity-50 h-1" />
    <Heading tag="h1">Animation-related components</Heading>
    <Heading tag="h3">lottie player</Heading>
</body>
