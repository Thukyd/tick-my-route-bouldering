<svelte:head>
    <title>Tick my route</title>
</svelte:head>


<h1>Track your boulder routes</h1>

<h3>Index => add session</h3>



<div class="card card-bordered">
    <div class="card-body">
      <h2 class="card-title">Your last session, 2nd of June</h2>
      <h2>Vels, Stuttgart</h2> 
      <p>Hard bouldering with low energy - routes were made for tall people.</p> 
      <div class="gap-1 rating">
        <input type="radio" name="rating-3" class="mask mask-heart bg-error"> 
        <input type="radio" name="rating-3" checked="checked" class="mask mask-heart bg-error"> 
        <input type="radio" name="rating-3" class="mask mask-heart bg-error"> 
        <input type="radio" name="rating-3" class="mask mask-heart bg-error"> 
        <input type="radio" name="rating-3" class="mask mask-heart bg-error">
      </div>
        <div class="card-actions">
            <!--details-->
            <a class="btn btn-primary" href="/">details</a>
            <!-- delete-->
            <label for="modal-delete-route" class="btn btn-ghost modal-button">delete</label> 
            <input type="checkbox" id="modal-delete-route" class="modal-toggle"> 

            <div class="modal">
                <div class="modal-box">
                    <p class="text-center">Once deleted sessions can not be restored again.<br>Do you really want to delete this session?</p> 
                    <div class="modal-action">
                        <label for="modal-delete-route" class="btn btn-primary">delete</label> 
                        <label for="modal-delete-route" class="btn">close</label>
                    </div>
                </div>
            </div>
        </div>
    </div> 


    <figure>
        
      <img src="https://picsum.photos/id/1005/400/250">
    </figure>
  </div> 

