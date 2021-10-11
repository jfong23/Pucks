// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.numeric');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.tools.math');
goog.require('cljs.reader');
propeller.push.instructions.numeric._gt = cljs.core.with_meta((function propeller$push$instructions$numeric$_gt(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_gt"], null));
propeller.push.instructions.numeric._gte = cljs.core.with_meta((function propeller$push$instructions$numeric$_gte(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_gte"], null));
propeller.push.instructions.numeric._lt = cljs.core.with_meta((function propeller$push$instructions$numeric$_lt(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_lt"], null));
propeller.push.instructions.numeric._lte = cljs.core.with_meta((function propeller$push$instructions$numeric$_lte(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_lte"], null));
propeller.push.instructions.numeric._add = cljs.core.with_meta((function propeller$push$instructions$numeric$_add(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_add"], null));
propeller.push.instructions.numeric._subtract = cljs.core.with_meta((function propeller$push$instructions$numeric$_subtract(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_subtract"], null));
propeller.push.instructions.numeric._mult = cljs.core.with_meta((function propeller$push$instructions$numeric$_mult(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_mult"], null));
propeller.push.instructions.numeric._quot = cljs.core.with_meta((function propeller$push$instructions$numeric$_quot(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14683_SHARP_,p2__14682_SHARP_){
if((p2__14682_SHARP_ === (0))){
return (1);
} else {
return cljs.core.quot(p1__14683_SHARP_,p2__14682_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_quot"], null));
propeller.push.instructions.numeric._mod = cljs.core.with_meta((function propeller$push$instructions$numeric$_mod(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14685_SHARP_,p2__14684_SHARP_){
if((p2__14684_SHARP_ === (0))){
return (1);
} else {
return cljs.core.mod(p1__14685_SHARP_,p2__14684_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_mod"], null));
propeller.push.instructions.numeric._max = cljs.core.with_meta((function propeller$push$instructions$numeric$_max(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.max,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_max"], null));
propeller.push.instructions.numeric._min = cljs.core.with_meta((function propeller$push$instructions$numeric$_min(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.min,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_min"], null));
propeller.push.instructions.numeric._from_boolean = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_boolean(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14686_SHARP_){
var G__14688 = (cljs.core.truth_(p1__14686_SHARP_)?(1):(0));
var fexpr__14687 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer))?cljs.core.int$:cljs.core.float$);
return (fexpr__14687.cljs$core$IFn$_invoke$arity$1 ? fexpr__14687.cljs$core$IFn$_invoke$arity$1(G__14688) : fexpr__14687.call(null,G__14688));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_from_boolean"], null));
propeller.push.instructions.numeric._from_char = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_char(stack,state){
return propeller.push.utils.helpers.make_instruction(state,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer))?cljs.core.int$:cljs.core.float$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$char,null], null), null),cljs.core.cst$kw$name,"_from_char"], null));
propeller.push.instructions.numeric._from_string = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_string(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14689_SHARP_){
try{var G__14692 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__14689_SHARP_);
var fexpr__14691 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer))?cljs.core.int$:cljs.core.float$);
return (fexpr__14691.cljs$core$IFn$_invoke$arity$1 ? fexpr__14691.cljs$core$IFn$_invoke$arity$1(G__14692) : fexpr__14691.call(null,G__14692));
}catch (e14690){if((e14690 instanceof Error)){
var e = e14690;
return null;
} else {
throw e14690;

}
}}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null),cljs.core.cst$kw$name,"_from_string"], null));
propeller.push.instructions.numeric._inc = cljs.core.with_meta((function propeller$push$instructions$numeric$_inc(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.inc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_inc"], null));
propeller.push.instructions.numeric._dec = cljs.core.with_meta((function propeller$push$instructions$numeric$_dec(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.dec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_dec"], null));
var seq__14693_14741 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float,cljs.core.cst$kw$integer], null));
var chunk__14700_14742 = null;
var count__14701_14743 = (0);
var i__14702_14744 = (0);
while(true){
if((i__14702_14744 < count__14701_14743)){
var stack__2790__auto___14745 = chunk__14700_14742.cljs$core$IIndexed$_nth$arity$2(null,i__14702_14744);
var seq__14703_14746 = cljs.core.seq(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__14705_14747 = null;
var count__14706_14748 = (0);
var i__14707_14749 = (0);
while(true){
if((i__14707_14749 < count__14706_14748)){
var func__2791__auto___14750 = chunk__14705_14747.cljs$core$IIndexed$_nth$arity$2(null,i__14707_14749);
var instruction_name__2792__auto___14751 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14745),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14750)))].join(''));
var metadata__2793__auto___14752 = (function (){var G__14730 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14750),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14745,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14745)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14750))))));
var fexpr__14729 = ((function (seq__14703_14746,chunk__14705_14747,count__14706_14748,i__14707_14749,seq__14693_14741,chunk__14700_14742,count__14701_14743,i__14702_14744,G__14730,instruction_name__2792__auto___14751,func__2791__auto___14750,stack__2790__auto___14745){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14703_14746,chunk__14705_14747,count__14706_14748,i__14707_14749,seq__14693_14741,chunk__14700_14742,count__14701_14743,i__14702_14744,G__14730,instruction_name__2792__auto___14751,func__2791__auto___14750,stack__2790__auto___14745))
;
return fexpr__14729(G__14730);
})();
var new_func__2794__auto___14753 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14750,stack__2790__auto___14745),metadata__2793__auto___14752);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14751,new_func__2794__auto___14753);


var G__14754 = seq__14703_14746;
var G__14755 = chunk__14705_14747;
var G__14756 = count__14706_14748;
var G__14757 = (i__14707_14749 + (1));
seq__14703_14746 = G__14754;
chunk__14705_14747 = G__14755;
count__14706_14748 = G__14756;
i__14707_14749 = G__14757;
continue;
} else {
var temp__5735__auto___14758 = cljs.core.seq(seq__14703_14746);
if(temp__5735__auto___14758){
var seq__14703_14759__$1 = temp__5735__auto___14758;
if(cljs.core.chunked_seq_QMARK_(seq__14703_14759__$1)){
var c__4550__auto___14760 = cljs.core.chunk_first(seq__14703_14759__$1);
var G__14761 = cljs.core.chunk_rest(seq__14703_14759__$1);
var G__14762 = c__4550__auto___14760;
var G__14763 = cljs.core.count(c__4550__auto___14760);
var G__14764 = (0);
seq__14703_14746 = G__14761;
chunk__14705_14747 = G__14762;
count__14706_14748 = G__14763;
i__14707_14749 = G__14764;
continue;
} else {
var func__2791__auto___14765 = cljs.core.first(seq__14703_14759__$1);
var instruction_name__2792__auto___14766 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14745),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14765)))].join(''));
var metadata__2793__auto___14767 = (function (){var G__14732 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14765),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14745,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14745)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14765))))));
var fexpr__14731 = ((function (seq__14703_14746,chunk__14705_14747,count__14706_14748,i__14707_14749,seq__14693_14741,chunk__14700_14742,count__14701_14743,i__14702_14744,G__14732,instruction_name__2792__auto___14766,func__2791__auto___14765,seq__14703_14759__$1,temp__5735__auto___14758,stack__2790__auto___14745){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14703_14746,chunk__14705_14747,count__14706_14748,i__14707_14749,seq__14693_14741,chunk__14700_14742,count__14701_14743,i__14702_14744,G__14732,instruction_name__2792__auto___14766,func__2791__auto___14765,seq__14703_14759__$1,temp__5735__auto___14758,stack__2790__auto___14745))
;
return fexpr__14731(G__14732);
})();
var new_func__2794__auto___14768 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14765,stack__2790__auto___14745),metadata__2793__auto___14767);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14766,new_func__2794__auto___14768);


var G__14769 = cljs.core.next(seq__14703_14759__$1);
var G__14770 = null;
var G__14771 = (0);
var G__14772 = (0);
seq__14703_14746 = G__14769;
chunk__14705_14747 = G__14770;
count__14706_14748 = G__14771;
i__14707_14749 = G__14772;
continue;
}
} else {
}
}
break;
}

var G__14773 = seq__14693_14741;
var G__14774 = chunk__14700_14742;
var G__14775 = count__14701_14743;
var G__14776 = (i__14702_14744 + (1));
seq__14693_14741 = G__14773;
chunk__14700_14742 = G__14774;
count__14701_14743 = G__14775;
i__14702_14744 = G__14776;
continue;
} else {
var temp__5735__auto___14777 = cljs.core.seq(seq__14693_14741);
if(temp__5735__auto___14777){
var seq__14693_14778__$1 = temp__5735__auto___14777;
if(cljs.core.chunked_seq_QMARK_(seq__14693_14778__$1)){
var c__4550__auto___14779 = cljs.core.chunk_first(seq__14693_14778__$1);
var G__14780 = cljs.core.chunk_rest(seq__14693_14778__$1);
var G__14781 = c__4550__auto___14779;
var G__14782 = cljs.core.count(c__4550__auto___14779);
var G__14783 = (0);
seq__14693_14741 = G__14780;
chunk__14700_14742 = G__14781;
count__14701_14743 = G__14782;
i__14702_14744 = G__14783;
continue;
} else {
var stack__2790__auto___14784 = cljs.core.first(seq__14693_14778__$1);
var seq__14694_14785 = cljs.core.seq(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__14696_14786 = null;
var count__14697_14787 = (0);
var i__14698_14788 = (0);
while(true){
if((i__14698_14788 < count__14697_14787)){
var func__2791__auto___14789 = chunk__14696_14786.cljs$core$IIndexed$_nth$arity$2(null,i__14698_14788);
var instruction_name__2792__auto___14790 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14784),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14789)))].join(''));
var metadata__2793__auto___14791 = (function (){var G__14738 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14789),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14784,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14784)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14789))))));
var fexpr__14737 = ((function (seq__14694_14785,chunk__14696_14786,count__14697_14787,i__14698_14788,seq__14693_14741,chunk__14700_14742,count__14701_14743,i__14702_14744,G__14738,instruction_name__2792__auto___14790,func__2791__auto___14789,stack__2790__auto___14784,seq__14693_14778__$1,temp__5735__auto___14777){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14694_14785,chunk__14696_14786,count__14697_14787,i__14698_14788,seq__14693_14741,chunk__14700_14742,count__14701_14743,i__14702_14744,G__14738,instruction_name__2792__auto___14790,func__2791__auto___14789,stack__2790__auto___14784,seq__14693_14778__$1,temp__5735__auto___14777))
;
return fexpr__14737(G__14738);
})();
var new_func__2794__auto___14792 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14789,stack__2790__auto___14784),metadata__2793__auto___14791);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14790,new_func__2794__auto___14792);


var G__14793 = seq__14694_14785;
var G__14794 = chunk__14696_14786;
var G__14795 = count__14697_14787;
var G__14796 = (i__14698_14788 + (1));
seq__14694_14785 = G__14793;
chunk__14696_14786 = G__14794;
count__14697_14787 = G__14795;
i__14698_14788 = G__14796;
continue;
} else {
var temp__5735__auto___14797__$1 = cljs.core.seq(seq__14694_14785);
if(temp__5735__auto___14797__$1){
var seq__14694_14798__$1 = temp__5735__auto___14797__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14694_14798__$1)){
var c__4550__auto___14799 = cljs.core.chunk_first(seq__14694_14798__$1);
var G__14800 = cljs.core.chunk_rest(seq__14694_14798__$1);
var G__14801 = c__4550__auto___14799;
var G__14802 = cljs.core.count(c__4550__auto___14799);
var G__14803 = (0);
seq__14694_14785 = G__14800;
chunk__14696_14786 = G__14801;
count__14697_14787 = G__14802;
i__14698_14788 = G__14803;
continue;
} else {
var func__2791__auto___14804 = cljs.core.first(seq__14694_14798__$1);
var instruction_name__2792__auto___14805 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14784),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14804)))].join(''));
var metadata__2793__auto___14806 = (function (){var G__14740 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14784,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14784)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14804))))));
var fexpr__14739 = ((function (seq__14694_14785,chunk__14696_14786,count__14697_14787,i__14698_14788,seq__14693_14741,chunk__14700_14742,count__14701_14743,i__14702_14744,G__14740,instruction_name__2792__auto___14805,func__2791__auto___14804,seq__14694_14798__$1,temp__5735__auto___14797__$1,stack__2790__auto___14784,seq__14693_14778__$1,temp__5735__auto___14777){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14694_14785,chunk__14696_14786,count__14697_14787,i__14698_14788,seq__14693_14741,chunk__14700_14742,count__14701_14743,i__14702_14744,G__14740,instruction_name__2792__auto___14805,func__2791__auto___14804,seq__14694_14798__$1,temp__5735__auto___14797__$1,stack__2790__auto___14784,seq__14693_14778__$1,temp__5735__auto___14777))
;
return fexpr__14739(G__14740);
})();
var new_func__2794__auto___14807 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14804,stack__2790__auto___14784),metadata__2793__auto___14806);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14805,new_func__2794__auto___14807);


var G__14808 = cljs.core.next(seq__14694_14798__$1);
var G__14809 = null;
var G__14810 = (0);
var G__14811 = (0);
seq__14694_14785 = G__14808;
chunk__14696_14786 = G__14809;
count__14697_14787 = G__14810;
i__14698_14788 = G__14811;
continue;
}
} else {
}
}
break;
}

var G__14812 = cljs.core.next(seq__14693_14778__$1);
var G__14813 = null;
var G__14814 = (0);
var G__14815 = (0);
seq__14693_14741 = G__14812;
chunk__14700_14742 = G__14813;
count__14701_14743 = G__14814;
i__14702_14744 = G__14815;
continue;
}
} else {
}
}
break;
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$float_cos,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,propeller.tools.math.cos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$float);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$float_sin,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,propeller.tools.math.sin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$float);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$float_tan,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,propeller.tools.math.tan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$float);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$float_from_integer,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.float$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer], null),cljs.core.cst$kw$float);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_from_float,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.int$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,null,cljs.core.cst$kw$integer,null], null), null)], null)));
