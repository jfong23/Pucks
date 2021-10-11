// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world21');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.spanner');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
pucks.worlds.dev.world21.agents = (function pucks$worlds$dev$world21$agents(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300)], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(100)], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.nursery.nursery(pucks.agents.spanner.spanner),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null))], null);
});
pucks.worlds.dev.world21.agents = (function pucks$worlds$dev$world21$agents(){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world21$agents_$_iter__13699(s__13700){
return (new cljs.core.LazySeq(null,(function (){
var s__13700__$1 = s__13700;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13700__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13700__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world21$agents_$_iter__13699_$_iter__13701(s__13702){
return (new cljs.core.LazySeq(null,((function (s__13700__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13702__$1 = s__13702;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13702__$1);
if(temp__5735__auto____$1){
var s__13702__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13702__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13702__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13704 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13703 = (0);
while(true){
if((i__13703 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13703);
cljs.core.chunk_append(b__13704,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__13705 = (i__13703 + (1));
i__13703 = G__13705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13704),pucks$worlds$dev$world21$agents_$_iter__13699_$_iter__13701(cljs.core.chunk_rest(s__13702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13704),null);
}
} else {
var y = cljs.core.first(s__13702__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),pucks$worlds$dev$world21$agents_$_iter__13699_$_iter__13701(cljs.core.rest(s__13702__$2)));
}
} else {
return null;
}
break;
}
});})(s__13700__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13700__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(600),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world21$agents_$_iter__13699(cljs.core.rest(s__13700__$1)));
} else {
var G__13706 = cljs.core.rest(s__13700__$1);
s__13700__$1 = G__13706;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(600),(200)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.nursery.nursery(pucks.agents.spanner.spanner),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null))], null)));
});
pucks.worlds.dev.world21.settings = (function pucks$worlds$dev$world21$settings(){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$screen_DASH_size,(400),cljs.core.cst$kw$scale,1.5,cljs.core.cst$kw$single_DASH_thread_DASH_mode,false,cljs.core.cst$kw$nursery_DASH_threshold,(25),cljs.core.cst$kw$neighborhood_DASH_size,(150),cljs.core.cst$kw$max_DASH_velocity,(40),cljs.core.cst$kw$cost_DASH_of_DASH_living,1.0E-4,cljs.core.cst$kw$cost_DASH_of_DASH_collision,0.01], null);
});
