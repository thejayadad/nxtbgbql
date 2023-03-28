import React from 'react'


import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div>
      <div class="card mb-3" id="main-post">
  <img src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>

    </div>
  )
}

export default PostCard