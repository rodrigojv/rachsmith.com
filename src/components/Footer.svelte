<script>
  import OutlineHeading from './OutlineHeading.svelte';
  import Section from './Section.svelte';
  import Tags from './Tags.svelte';

  export let tags;
</script>

<footer>
  <section class="">
    <OutlineHeading>Browse Notes by tag</OutlineHeading>
    <Section><Tags {tags} /></Section>
  </section>
  <section class="">
    <OutlineHeading>Acknowledgement of Country</OutlineHeading>
    <Section
      ><p>
        I acknowledge the Gubbi Gubbi people, the Traditional Owners of the land
        and waterways where I live. I would like to pay my respects to Elders
        past, present and emerging.
      </p></Section
    >
  </section>
  <section class="">
    <OutlineHeading>Get in touch</OutlineHeading>
    <Section>
      <p>
        If you'd like to get in contact, feel free to email me at contact @
        rachsmith dot com.
      </p>
    </Section>
  </section>
  <section class="">
    © {new Date().getFullYear()} Rachel Smith
  </section>
</footer>
