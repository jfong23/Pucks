// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.neighbors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.util');
goog.require('cljs.core');
/**
 * Strips the embedded agents, which might be in the values of :neighbors, 
 * :sensed, and :overlaps, from agent a. This prevents the accumulation of long
 * or infinite chains of recursive agent references and also prevents agents
 * from inappropriately learning about agents that they have not sensed directly.
 */
pucks.neighbors.strip_embedded_agents = (function pucks$neighbors$strip_embedded_agents(a){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$neighbors),cljs.core.cst$kw$sensed),cljs.core.cst$kw$overlaps);
});
/**
 * Returns a neighborhood grid containing all agents.
 */
pucks.neighbors.neighborhood_grid = (function pucks$neighbors$neighborhood_grid(agents){
var grid_size = ((cljs.core.cst$kw$screen_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)) / cljs.core.cst$kw$neighborhood_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings))) | (0));
var grid = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(grid_size,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(grid_size,cljs.core.PersistentVector.EMPTY))));
var remaining = agents;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return grid;
} else {
var G__14066 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(grid,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (grid,remaining,grid_size){
return (function (p1__14065_SHARP_){
return ((p1__14065_SHARP_ / cljs.core.cst$kw$neighborhood_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings))) | (0));
});})(grid,remaining,grid_size))
,cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.first(remaining))),cljs.core.conj,cljs.core.first(remaining));
var G__14067 = cljs.core.rest(remaining);
grid = G__14066;
remaining = G__14067;
continue;
}
break;
}
});
/**
 * Returns a vector of the indices for the neighborhood grid where neighbors
 * could be found.
 */
pucks.neighbors.get_neighboring_grid_spaces = (function pucks$neighbors$get_neighboring_grid_spaces(grid_size,p__14068){
var vec__14069 = p__14068;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069,(1),null);
return cljs.core.vec((function (){var iter__4523__auto__ = ((function (vec__14069,x,y){
return (function pucks$neighbors$get_neighboring_grid_spaces_$_iter__14072(s__14073){
return (new cljs.core.LazySeq(null,((function (vec__14069,x,y){
return (function (){
var s__14073__$1 = s__14073;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14073__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var dx = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__14073__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__14069,x,y){
return (function pucks$neighbors$get_neighboring_grid_spaces_$_iter__14072_$_iter__14074(s__14075){
return (new cljs.core.LazySeq(null,((function (s__14073__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__14069,x,y){
return (function (){
var s__14075__$1 = s__14075;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14075__$1);
if(temp__5735__auto____$1){
var s__14075__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14075__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14075__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14077 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14076 = (0);
while(true){
if((i__14076 < size__4522__auto__)){
var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14076);
cljs.core.chunk_append(b__14077,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((x + dx),grid_size),cljs.core.mod((y + dy),grid_size)], null));

var G__14078 = (i__14076 + (1));
i__14076 = G__14078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14077),pucks$neighbors$get_neighboring_grid_spaces_$_iter__14072_$_iter__14074(cljs.core.chunk_rest(s__14075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14077),null);
}
} else {
var dy = cljs.core.first(s__14075__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((x + dx),grid_size),cljs.core.mod((y + dy),grid_size)], null),pucks$neighbors$get_neighboring_grid_spaces_$_iter__14072_$_iter__14074(cljs.core.rest(s__14075__$2)));
}
} else {
return null;
}
break;
}
});})(s__14073__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__14069,x,y))
,null,null));
});})(s__14073__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__14069,x,y))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$neighbors$get_neighboring_grid_spaces_$_iter__14072(cljs.core.rest(s__14073__$1)));
} else {
var G__14079 = cljs.core.rest(s__14073__$1);
s__14073__$1 = G__14079;
continue;
}
} else {
return null;
}
break;
}
});})(vec__14069,x,y))
,null,null));
});})(vec__14069,x,y))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})());
});
/**
 * Gets the potential neighbors of an agent.
 */
pucks.neighbors.get_potential_neighbors = (function pucks$neighbors$get_potential_neighbors(grid,a){
var grid_size = cljs.core.count(grid);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (grid_size){
return (function (p1__14080_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,p1__14080_SHARP_);
});})(grid_size))
,pucks.neighbors.get_neighboring_grid_spaces(grid_size,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (grid_size){
return (function (p1__14081_SHARP_){
return ((p1__14081_SHARP_ / cljs.core.cst$kw$neighborhood_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings))) | (0));
});})(grid_size))
,cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a)))));
});
/**
 * Annotates each agent in the simulation with :neighbors and :overlaps.
 */
pucks.neighbors.update_neighbors = (function pucks$neighbors$update_neighbors(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pucks.globals.all_agents,(function (objs){
var stripped = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pucks.neighbors.strip_embedded_agents,objs);
var grid = pucks.neighbors.neighborhood_grid(stripped);
return pucks.util.pmapallv(((function (stripped,grid){
return (function (obj){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$stone.cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.cst$kw$beacon.cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.cst$kw$nursery.cljs$core$IFn$_invoke$arity$1(obj);
}
}
})())){
return obj;
} else {
var potential_neighs = pucks.neighbors.get_potential_neighbors(grid,obj);
var neighs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (potential_neighs,stripped,grid){
return (function (p1__14085_SHARP_){
return pucks.util.relativize_position(p1__14085_SHARP_,cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(obj));
});})(potential_neighs,stripped,grid))
,cljs.core.filterv(((function (potential_neighs,stripped,grid){
return (function (p1__14086_SHARP_){
return (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(obj),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__14086_SHARP_))))) && ((pucks.vec2D.distance(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(obj),cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p1__14086_SHARP_)) <= cljs.core.cst$kw$neighborhood_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)))));
});})(potential_neighs,stripped,grid))
,potential_neighs));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.cst$kw$neighbors,neighs),cljs.core.cst$kw$overlaps,cljs.core.filterv(((function (potential_neighs,neighs,stripped,grid){
return (function (p1__14087_SHARP_){
return (pucks.vec2D.length(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p1__14087_SHARP_)) <= (cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(obj) + cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(p1__14087_SHARP_)));
});})(potential_neighs,neighs,stripped,grid))
,neighs));
}
});})(stripped,grid))
,stripped);
}));
});
