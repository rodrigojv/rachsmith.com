<script>
  export let tag;
  export let number;
  export let small;
</script>

<a href={`/tag/${tag}/`} class={`tag ${tag} ${small ? 'small' : ''}`}>
  {tag}{#if number}<span>{number}</span>{/if}
</a>

<style>
  .tag {
    color: #000;
    text-decoration: none;
    position: relative;
    text-transform: lowercase;
    display: inline-block;
    border: 2px solid #222;
    margin-right: 0.5em;
    font-family: var(--mono-font);
    font-size: 0.9em;
    padding: 0 0.3em;
    transform-style: preserve-3d;
    background: var(--off-white-color);
    transition: background-color 0.2s ease-in-out;
  }

  .tag.small {
    font-size: 0.7em;
  }

  .tag::before {
    width: 100%;
    height: 100%;
    content: '';
    left: 0;
    top: 0;
    transform: translate3d(0.1em, 0.1em, -1px);
    position: absolute;
    transition: transform 0.2s ease-in-out;
    box-sizing: content-box;
  }

  .tag span {
    border-left: 2px solid #222;
    padding-left: 0.3em;
    margin-left: 0.3em;
  }

  .tag:hover::before {
    transform: translate3d(-0.1em, -0.1em, -1px);
  }

  .tag.books {
    /* text-shadow: 1px -1px 0 #ff1900; */
  }
  .tag.books:hover {
    background: #ff1900;
  }
  .tag.books::before {
    background: #ff1900;
    border: 2px solid #ff1900;
  }

  .tag.development {
    /* text-shadow: 1px -1px 0 #ff8800; */
  }
  .tag.development:hover {
    background: #ff8800;
  }
  .tag.development::before {
    background: #ff8800;
    border: 2px solid #ff8800;
  }

  .tag.miscellany {
    /* text-shadow: 1px -1px 0 #d8ff00; */
  }
  .tag.miscellany:hover {
    background: #d8ff00;
  }
  .tag.miscellany::before {
    background: #d8ff00;
    border: 2px solid #d8ff00;
  }

  .tag.mothering {
    /* text-shadow: 1px -1px 0 #00ff2e; */
  }
  .tag.mothering:hover {
    background: #00ff2e;
  }
  .tag.mothering::before {
    background: #00ff2e;
    border: 2px solid #00ff2e;
  }

  .tag.podcasts {
    /* text-shadow: 1px -1px 0 #00ddff; */
  }
  .tag.podcasts:hover {
    background: #00ddff;
  }
  .tag.podcasts::before {
    background: #00ddff;
    border: 2px solid #00ddff;
  }

  .tag.productivity {
    /* text-shadow: 1px -1px 0 #057dff; */
  }
  .tag.productivity:hover {
    background: #057dff;
  }
  .tag.productivity::before {
    background: #057dff;
    border: 2px solid #057dff;
  }

  .tag.wellbeing {
    /* text-shadow: 1px -1px 0 #d400ff; */
  }
  .tag.wellbeing:hover {
    background: #d400ff;
  }
  .tag.wellbeing::before {
    background: #d400ff;
    border: 2px solid #d400ff;
  }

  .tag.work {
    /* text-shadow: 1px -1px 0 #ff008c; */
  }
  .tag.work:hover {
    background: #ff008c;
  }
  .tag.work::before {
    background: #ff008c;
    border: 2px solid #ff008c;
  }
</style>
