const mongoose=require ("mongoose")
const Film=mongoose.model(
    'Film',
    new mongoose.Schema(
        {
video:String,
type:[{
  type1:String  
},
{
    type2:String
}],

mainimage:[
{
    type:String,
    isPoster:{
        type:Boolean,
        default:false
    },
    src:String,
},
],
slideimage:[
    {
        type:String,
        isPoster:{
            type:Boolean,
            default:false
        },
        src:String,
    },
    ],
date:String,
language:String,

age:Number,
time:String,
price:Number,



        },
        {
            timestamps:true,
        }
    )
)
module.exports={Film}