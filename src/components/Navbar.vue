<template>
  <div>
    <nav>
      <ul>
        <li>
          <h2>HOME</h2>
          <p>Back to home</p>
        </li>
        <li>
          <h2>PRODUCTS</h2>
          <p>What we have for you</p>
        </li>
        <li>
          <h2>SERVICES</h2>
          <p>Things we do</p>
        </li>
        <li>
          <h2>BLOG</h2>
          <p>Follow our updates</p>
        </li>
        <li>
          <h2>CONTACT</h2>
          <p>Ways to reach us</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  *{
    font-family: Helvetica, Georgia, Arial, sans-serif;
  }

  nav{
    ul{
      display: flex;
      list-style: none;
      margin-top: 30px;
      li{
        margin-left: 20px;
        border-left: grey dashed 1px;
        h2,p{
          padding-left: 15px;
          line-height: 7px;
        }
        h2{
          color: dimgray;
          font-size: 15px;
        }
        p{
          font-size: 12px;
          color: darkgray;
        }
      }
    }
  }

</style>
