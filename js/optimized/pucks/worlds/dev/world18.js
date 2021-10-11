// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world18');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.swarmer');
goog.require('pucks.agents.nursery');
pucks.worlds.dev.world18.agents = (function pucks$worlds$dev$world18$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world18$agents_$_iter__13315(s__13316){
return (new cljs.core.LazySeq(null,(function (){
var s__13316__$1 = s__13316;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13316__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13316__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world18$agents_$_iter__13315_$_iter__13317(s__13318){
return (new cljs.core.LazySeq(null,((function (s__13316__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13318__$1 = s__13318;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13318__$1);
if(temp__5735__auto____$1){
var s__13318__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13318__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13318__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13320 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13319 = (0);
while(true){
if((i__13319 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13319);
cljs.core.chunk_append(b__13320,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.swarmer.swarmer),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13321 = (i__13319 + (1));
i__13319 = G__13321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13320),pucks$worlds$dev$world18$agents_$_iter__13315_$_iter__13317(cljs.core.chunk_rest(s__13318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13320),null);
}
} else {
var y = cljs.core.first(s__13318__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.swarmer.swarmer),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world18$agents_$_iter__13315_$_iter__13317(cljs.core.rest(s__13318__$2)));
}
} else {
return null;
}
break;
}
});})(s__13316__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13316__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1800),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world18$agents_$_iter__13315(cljs.core.rest(s__13316__$1)));
} else {
var G__13322 = cljs.core.rest(s__13316__$1);
s__13316__$1 = G__13322;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1800),(200)));
})());
});
pucks.worlds.dev.world18.settings = (function pucks$worlds$dev$world18$settings(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$screen_DASH_size,(1800),cljs.core.cst$kw$scale,0.5,cljs.core.cst$kw$neighborhood_DASH_size,(100),cljs.core.cst$kw$ms_DASH_limit,(60000)], null);
});
