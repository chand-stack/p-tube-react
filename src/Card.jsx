const Card = ({card}) => {
    const {thumbnail,title,authors,others} = card;
    // console.log(card)
  
    return (
        <div>

<div class="card md:h-[400px] w-80 mx-auto md:w-auto md:mx-0 bg-white text-black shadow-xl">
<figure className=" h-60">{<img className=" h-60"  src={thumbnail}></img>}</figure>
<div className="flex">
<div className=" pt-6">
{<img className=" h-12 w-12 rounded-full m-2" src={authors[0].profile_picture}></img>}
</div>
<div class="card-body">
<h2 class="card-title font-bold">{title}</h2>
<p>{authors[0].profile_name} <span>{authors[0].verified? <div class="rating">
<input type="radio" name="rating-2" class="mask mask-star-2 bg-blue-500" checked /></div> :''}</span></p>
<p>{others.views}</p>
</div>
</div>
</div>
                

        </div>
    );
};

export default Card;