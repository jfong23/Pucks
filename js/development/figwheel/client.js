// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e26868){if((e26868 instanceof Error)){
var e = e26868;
return "Error: Unable to stringify";
} else {
throw e26868;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__26871 = arguments.length;
switch (G__26871) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__26869_SHARP_){
if(typeof p1__26869_SHARP_ === 'string'){
return p1__26869_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__26869_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26874 = arguments.length;
var i__4731__auto___26875 = (0);
while(true){
if((i__4731__auto___26875 < len__4730__auto___26874)){
args__4736__auto__.push((arguments[i__4731__auto___26875]));

var G__26876 = (i__4731__auto___26875 + (1));
i__4731__auto___26875 = G__26876;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq26873){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26873));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26878 = arguments.length;
var i__4731__auto___26879 = (0);
while(true){
if((i__4731__auto___26879 < len__4730__auto___26878)){
args__4736__auto__.push((arguments[i__4731__auto___26879]));

var G__26880 = (i__4731__auto___26879 + (1));
i__4731__auto___26879 = G__26880;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq26877){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26877));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26881){
var map__26882 = p__26881;
var map__26882__$1 = (((((!((map__26882 == null))))?(((((map__26882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26882):map__26882);
var message = cljs.core.get.call(null,map__26882__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26882__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22559__auto___26961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___26961,ch){
return (function (){
var f__22560__auto__ = (function (){var switch__22499__auto__ = ((function (c__22559__auto___26961,ch){
return (function (state_26933){
var state_val_26934 = (state_26933[(1)]);
if((state_val_26934 === (7))){
var inst_26929 = (state_26933[(2)]);
var state_26933__$1 = state_26933;
var statearr_26935_26962 = state_26933__$1;
(statearr_26935_26962[(2)] = inst_26929);

(statearr_26935_26962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (1))){
var state_26933__$1 = state_26933;
var statearr_26936_26963 = state_26933__$1;
(statearr_26936_26963[(2)] = null);

(statearr_26936_26963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (4))){
var inst_26886 = (state_26933[(7)]);
var inst_26886__$1 = (state_26933[(2)]);
var state_26933__$1 = (function (){var statearr_26937 = state_26933;
(statearr_26937[(7)] = inst_26886__$1);

return statearr_26937;
})();
if(cljs.core.truth_(inst_26886__$1)){
var statearr_26938_26964 = state_26933__$1;
(statearr_26938_26964[(1)] = (5));

} else {
var statearr_26939_26965 = state_26933__$1;
(statearr_26939_26965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (15))){
var inst_26893 = (state_26933[(8)]);
var inst_26908 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26893);
var inst_26909 = cljs.core.first.call(null,inst_26908);
var inst_26910 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26909);
var inst_26911 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26910)].join('');
var inst_26912 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26911);
var state_26933__$1 = state_26933;
var statearr_26940_26966 = state_26933__$1;
(statearr_26940_26966[(2)] = inst_26912);

(statearr_26940_26966[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (13))){
var inst_26917 = (state_26933[(2)]);
var state_26933__$1 = state_26933;
var statearr_26941_26967 = state_26933__$1;
(statearr_26941_26967[(2)] = inst_26917);

(statearr_26941_26967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (6))){
var state_26933__$1 = state_26933;
var statearr_26942_26968 = state_26933__$1;
(statearr_26942_26968[(2)] = null);

(statearr_26942_26968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (17))){
var inst_26915 = (state_26933[(2)]);
var state_26933__$1 = state_26933;
var statearr_26943_26969 = state_26933__$1;
(statearr_26943_26969[(2)] = inst_26915);

(statearr_26943_26969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (3))){
var inst_26931 = (state_26933[(2)]);
var state_26933__$1 = state_26933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26933__$1,inst_26931);
} else {
if((state_val_26934 === (12))){
var inst_26892 = (state_26933[(9)]);
var inst_26906 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26892,opts);
var state_26933__$1 = state_26933;
if(inst_26906){
var statearr_26944_26970 = state_26933__$1;
(statearr_26944_26970[(1)] = (15));

} else {
var statearr_26945_26971 = state_26933__$1;
(statearr_26945_26971[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (2))){
var state_26933__$1 = state_26933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26933__$1,(4),ch);
} else {
if((state_val_26934 === (11))){
var inst_26893 = (state_26933[(8)]);
var inst_26898 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26899 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26893);
var inst_26900 = cljs.core.async.timeout.call(null,(1000));
var inst_26901 = [inst_26899,inst_26900];
var inst_26902 = (new cljs.core.PersistentVector(null,2,(5),inst_26898,inst_26901,null));
var state_26933__$1 = state_26933;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26933__$1,(14),inst_26902);
} else {
if((state_val_26934 === (9))){
var inst_26893 = (state_26933[(8)]);
var inst_26919 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26920 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26893);
var inst_26921 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26920);
var inst_26922 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26921)].join('');
var inst_26923 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26922);
var state_26933__$1 = (function (){var statearr_26946 = state_26933;
(statearr_26946[(10)] = inst_26919);

return statearr_26946;
})();
var statearr_26947_26972 = state_26933__$1;
(statearr_26947_26972[(2)] = inst_26923);

(statearr_26947_26972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (5))){
var inst_26886 = (state_26933[(7)]);
var inst_26888 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26889 = (new cljs.core.PersistentArrayMap(null,2,inst_26888,null));
var inst_26890 = (new cljs.core.PersistentHashSet(null,inst_26889,null));
var inst_26891 = figwheel.client.focus_msgs.call(null,inst_26890,inst_26886);
var inst_26892 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26891);
var inst_26893 = cljs.core.first.call(null,inst_26891);
var inst_26894 = figwheel.client.autoload_QMARK_.call(null);
var state_26933__$1 = (function (){var statearr_26948 = state_26933;
(statearr_26948[(9)] = inst_26892);

(statearr_26948[(8)] = inst_26893);

return statearr_26948;
})();
if(cljs.core.truth_(inst_26894)){
var statearr_26949_26973 = state_26933__$1;
(statearr_26949_26973[(1)] = (8));

} else {
var statearr_26950_26974 = state_26933__$1;
(statearr_26950_26974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (14))){
var inst_26904 = (state_26933[(2)]);
var state_26933__$1 = state_26933;
var statearr_26951_26975 = state_26933__$1;
(statearr_26951_26975[(2)] = inst_26904);

(statearr_26951_26975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (16))){
var state_26933__$1 = state_26933;
var statearr_26952_26976 = state_26933__$1;
(statearr_26952_26976[(2)] = null);

(statearr_26952_26976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (10))){
var inst_26925 = (state_26933[(2)]);
var state_26933__$1 = (function (){var statearr_26953 = state_26933;
(statearr_26953[(11)] = inst_26925);

return statearr_26953;
})();
var statearr_26954_26977 = state_26933__$1;
(statearr_26954_26977[(2)] = null);

(statearr_26954_26977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (8))){
var inst_26892 = (state_26933[(9)]);
var inst_26896 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26892,opts);
var state_26933__$1 = state_26933;
if(cljs.core.truth_(inst_26896)){
var statearr_26955_26978 = state_26933__$1;
(statearr_26955_26978[(1)] = (11));

} else {
var statearr_26956_26979 = state_26933__$1;
(statearr_26956_26979[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22559__auto___26961,ch))
;
return ((function (switch__22499__auto__,c__22559__auto___26961,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22500__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22500__auto____0 = (function (){
var statearr_26957 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26957[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22500__auto__);

(statearr_26957[(1)] = (1));

return statearr_26957;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22500__auto____1 = (function (state_26933){
while(true){
var ret_value__22501__auto__ = (function (){try{while(true){
var result__22502__auto__ = switch__22499__auto__.call(null,state_26933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22502__auto__;
}
break;
}
}catch (e26958){if((e26958 instanceof Object)){
var ex__22503__auto__ = e26958;
var statearr_26959_26980 = state_26933;
(statearr_26959_26980[(5)] = ex__22503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26981 = state_26933;
state_26933 = G__26981;
continue;
} else {
return ret_value__22501__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22500__auto__ = function(state_26933){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22500__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22500__auto____1.call(this,state_26933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22500__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22500__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22500__auto__;
})()
;})(switch__22499__auto__,c__22559__auto___26961,ch))
})();
var state__22561__auto__ = (function (){var statearr_26960 = f__22560__auto__.call(null);
(statearr_26960[(6)] = c__22559__auto___26961);

return statearr_26960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___26961,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26982_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26982_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26988 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26988){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26984 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26985 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26986 = true;
var _STAR_print_fn_STAR__temp_val__26987 = ((function (_STAR_print_newline_STAR__orig_val__26984,_STAR_print_fn_STAR__orig_val__26985,_STAR_print_newline_STAR__temp_val__26986,sb,base_path_26988){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__26984,_STAR_print_fn_STAR__orig_val__26985,_STAR_print_newline_STAR__temp_val__26986,sb,base_path_26988))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26986;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26987;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26985;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26984;
}}catch (e26983){if((e26983 instanceof Error)){
var e = e26983;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26988], null));
} else {
var e = e26983;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26988))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26989){
var map__26990 = p__26989;
var map__26990__$1 = (((((!((map__26990 == null))))?(((((map__26990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26990):map__26990);
var opts = map__26990__$1;
var build_id = cljs.core.get.call(null,map__26990__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26990,map__26990__$1,opts,build_id){
return (function (p__26992){
var vec__26993 = p__26992;
var seq__26994 = cljs.core.seq.call(null,vec__26993);
var first__26995 = cljs.core.first.call(null,seq__26994);
var seq__26994__$1 = cljs.core.next.call(null,seq__26994);
var map__26996 = first__26995;
var map__26996__$1 = (((((!((map__26996 == null))))?(((((map__26996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26996):map__26996);
var msg = map__26996__$1;
var msg_name = cljs.core.get.call(null,map__26996__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26994__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26993,seq__26994,first__26995,seq__26994__$1,map__26996,map__26996__$1,msg,msg_name,_,map__26990,map__26990__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26993,seq__26994,first__26995,seq__26994__$1,map__26996,map__26996__$1,msg,msg_name,_,map__26990,map__26990__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26990,map__26990__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26998){
var vec__26999 = p__26998;
var seq__27000 = cljs.core.seq.call(null,vec__26999);
var first__27001 = cljs.core.first.call(null,seq__27000);
var seq__27000__$1 = cljs.core.next.call(null,seq__27000);
var map__27002 = first__27001;
var map__27002__$1 = (((((!((map__27002 == null))))?(((((map__27002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27002):map__27002);
var msg = map__27002__$1;
var msg_name = cljs.core.get.call(null,map__27002__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27000__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27004){
var map__27005 = p__27004;
var map__27005__$1 = (((((!((map__27005 == null))))?(((((map__27005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27005):map__27005);
var on_compile_warning = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27005,map__27005__$1,on_compile_warning,on_compile_fail){
return (function (p__27007){
var vec__27008 = p__27007;
var seq__27009 = cljs.core.seq.call(null,vec__27008);
var first__27010 = cljs.core.first.call(null,seq__27009);
var seq__27009__$1 = cljs.core.next.call(null,seq__27009);
var map__27011 = first__27010;
var map__27011__$1 = (((((!((map__27011 == null))))?(((((map__27011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27011):map__27011);
var msg = map__27011__$1;
var msg_name = cljs.core.get.call(null,map__27011__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27009__$1;
var pred__27013 = cljs.core._EQ_;
var expr__27014 = msg_name;
if(cljs.core.truth_(pred__27013.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27014))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27013.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27014))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27005,map__27005__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22560__auto__ = (function (){var switch__22499__auto__ = ((function (c__22559__auto__,msg_hist,msg_names,msg){
return (function (state_27103){
var state_val_27104 = (state_27103[(1)]);
if((state_val_27104 === (7))){
var inst_27023 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
if(cljs.core.truth_(inst_27023)){
var statearr_27105_27152 = state_27103__$1;
(statearr_27105_27152[(1)] = (8));

} else {
var statearr_27106_27153 = state_27103__$1;
(statearr_27106_27153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (20))){
var inst_27097 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27107_27154 = state_27103__$1;
(statearr_27107_27154[(2)] = inst_27097);

(statearr_27107_27154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (27))){
var inst_27093 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27108_27155 = state_27103__$1;
(statearr_27108_27155[(2)] = inst_27093);

(statearr_27108_27155[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (1))){
var inst_27016 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27103__$1 = state_27103;
if(cljs.core.truth_(inst_27016)){
var statearr_27109_27156 = state_27103__$1;
(statearr_27109_27156[(1)] = (2));

} else {
var statearr_27110_27157 = state_27103__$1;
(statearr_27110_27157[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (24))){
var inst_27095 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27111_27158 = state_27103__$1;
(statearr_27111_27158[(2)] = inst_27095);

(statearr_27111_27158[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (4))){
var inst_27101 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27103__$1,inst_27101);
} else {
if((state_val_27104 === (15))){
var inst_27099 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27112_27159 = state_27103__$1;
(statearr_27112_27159[(2)] = inst_27099);

(statearr_27112_27159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (21))){
var inst_27052 = (state_27103[(2)]);
var inst_27053 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27054 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27053);
var state_27103__$1 = (function (){var statearr_27113 = state_27103;
(statearr_27113[(7)] = inst_27052);

return statearr_27113;
})();
var statearr_27114_27160 = state_27103__$1;
(statearr_27114_27160[(2)] = inst_27054);

(statearr_27114_27160[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (31))){
var inst_27082 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27103__$1 = state_27103;
if(inst_27082){
var statearr_27115_27161 = state_27103__$1;
(statearr_27115_27161[(1)] = (34));

} else {
var statearr_27116_27162 = state_27103__$1;
(statearr_27116_27162[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (32))){
var inst_27091 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27117_27163 = state_27103__$1;
(statearr_27117_27163[(2)] = inst_27091);

(statearr_27117_27163[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (33))){
var inst_27078 = (state_27103[(2)]);
var inst_27079 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27080 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27079);
var state_27103__$1 = (function (){var statearr_27118 = state_27103;
(statearr_27118[(8)] = inst_27078);

return statearr_27118;
})();
var statearr_27119_27164 = state_27103__$1;
(statearr_27119_27164[(2)] = inst_27080);

(statearr_27119_27164[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (13))){
var inst_27037 = figwheel.client.heads_up.clear.call(null);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(16),inst_27037);
} else {
if((state_val_27104 === (22))){
var inst_27058 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27059 = figwheel.client.heads_up.append_warning_message.call(null,inst_27058);
var state_27103__$1 = state_27103;
var statearr_27120_27165 = state_27103__$1;
(statearr_27120_27165[(2)] = inst_27059);

(statearr_27120_27165[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (36))){
var inst_27089 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27121_27166 = state_27103__$1;
(statearr_27121_27166[(2)] = inst_27089);

(statearr_27121_27166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (29))){
var inst_27069 = (state_27103[(2)]);
var inst_27070 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27071 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27070);
var state_27103__$1 = (function (){var statearr_27122 = state_27103;
(statearr_27122[(9)] = inst_27069);

return statearr_27122;
})();
var statearr_27123_27167 = state_27103__$1;
(statearr_27123_27167[(2)] = inst_27071);

(statearr_27123_27167[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (6))){
var inst_27018 = (state_27103[(10)]);
var state_27103__$1 = state_27103;
var statearr_27124_27168 = state_27103__$1;
(statearr_27124_27168[(2)] = inst_27018);

(statearr_27124_27168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (28))){
var inst_27065 = (state_27103[(2)]);
var inst_27066 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27067 = figwheel.client.heads_up.display_warning.call(null,inst_27066);
var state_27103__$1 = (function (){var statearr_27125 = state_27103;
(statearr_27125[(11)] = inst_27065);

return statearr_27125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(29),inst_27067);
} else {
if((state_val_27104 === (25))){
var inst_27063 = figwheel.client.heads_up.clear.call(null);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(28),inst_27063);
} else {
if((state_val_27104 === (34))){
var inst_27084 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(37),inst_27084);
} else {
if((state_val_27104 === (17))){
var inst_27043 = (state_27103[(2)]);
var inst_27044 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27045 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27044);
var state_27103__$1 = (function (){var statearr_27126 = state_27103;
(statearr_27126[(12)] = inst_27043);

return statearr_27126;
})();
var statearr_27127_27169 = state_27103__$1;
(statearr_27127_27169[(2)] = inst_27045);

(statearr_27127_27169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (3))){
var inst_27035 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27103__$1 = state_27103;
if(inst_27035){
var statearr_27128_27170 = state_27103__$1;
(statearr_27128_27170[(1)] = (13));

} else {
var statearr_27129_27171 = state_27103__$1;
(statearr_27129_27171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (12))){
var inst_27031 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27130_27172 = state_27103__$1;
(statearr_27130_27172[(2)] = inst_27031);

(statearr_27130_27172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (2))){
var inst_27018 = (state_27103[(10)]);
var inst_27018__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27103__$1 = (function (){var statearr_27131 = state_27103;
(statearr_27131[(10)] = inst_27018__$1);

return statearr_27131;
})();
if(cljs.core.truth_(inst_27018__$1)){
var statearr_27132_27173 = state_27103__$1;
(statearr_27132_27173[(1)] = (5));

} else {
var statearr_27133_27174 = state_27103__$1;
(statearr_27133_27174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (23))){
var inst_27061 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27103__$1 = state_27103;
if(inst_27061){
var statearr_27134_27175 = state_27103__$1;
(statearr_27134_27175[(1)] = (25));

} else {
var statearr_27135_27176 = state_27103__$1;
(statearr_27135_27176[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (35))){
var state_27103__$1 = state_27103;
var statearr_27136_27177 = state_27103__$1;
(statearr_27136_27177[(2)] = null);

(statearr_27136_27177[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (19))){
var inst_27056 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27103__$1 = state_27103;
if(inst_27056){
var statearr_27137_27178 = state_27103__$1;
(statearr_27137_27178[(1)] = (22));

} else {
var statearr_27138_27179 = state_27103__$1;
(statearr_27138_27179[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (11))){
var inst_27027 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27139_27180 = state_27103__$1;
(statearr_27139_27180[(2)] = inst_27027);

(statearr_27139_27180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (9))){
var inst_27029 = figwheel.client.heads_up.clear.call(null);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(12),inst_27029);
} else {
if((state_val_27104 === (5))){
var inst_27020 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27103__$1 = state_27103;
var statearr_27140_27181 = state_27103__$1;
(statearr_27140_27181[(2)] = inst_27020);

(statearr_27140_27181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (14))){
var inst_27047 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27103__$1 = state_27103;
if(inst_27047){
var statearr_27141_27182 = state_27103__$1;
(statearr_27141_27182[(1)] = (18));

} else {
var statearr_27142_27183 = state_27103__$1;
(statearr_27142_27183[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (26))){
var inst_27073 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27103__$1 = state_27103;
if(inst_27073){
var statearr_27143_27184 = state_27103__$1;
(statearr_27143_27184[(1)] = (30));

} else {
var statearr_27144_27185 = state_27103__$1;
(statearr_27144_27185[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (16))){
var inst_27039 = (state_27103[(2)]);
var inst_27040 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27041 = figwheel.client.heads_up.display_exception.call(null,inst_27040);
var state_27103__$1 = (function (){var statearr_27145 = state_27103;
(statearr_27145[(13)] = inst_27039);

return statearr_27145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(17),inst_27041);
} else {
if((state_val_27104 === (30))){
var inst_27075 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27076 = figwheel.client.heads_up.display_warning.call(null,inst_27075);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(33),inst_27076);
} else {
if((state_val_27104 === (10))){
var inst_27033 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27146_27186 = state_27103__$1;
(statearr_27146_27186[(2)] = inst_27033);

(statearr_27146_27186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (18))){
var inst_27049 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27050 = figwheel.client.heads_up.display_exception.call(null,inst_27049);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(21),inst_27050);
} else {
if((state_val_27104 === (37))){
var inst_27086 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27147_27187 = state_27103__$1;
(statearr_27147_27187[(2)] = inst_27086);

(statearr_27147_27187[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (8))){
var inst_27025 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(11),inst_27025);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22559__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22499__auto__,c__22559__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto____0 = (function (){
var statearr_27148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27148[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto__);

(statearr_27148[(1)] = (1));

return statearr_27148;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto____1 = (function (state_27103){
while(true){
var ret_value__22501__auto__ = (function (){try{while(true){
var result__22502__auto__ = switch__22499__auto__.call(null,state_27103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22502__auto__;
}
break;
}
}catch (e27149){if((e27149 instanceof Object)){
var ex__22503__auto__ = e27149;
var statearr_27150_27188 = state_27103;
(statearr_27150_27188[(5)] = ex__22503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27189 = state_27103;
state_27103 = G__27189;
continue;
} else {
return ret_value__22501__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto__ = function(state_27103){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto____1.call(this,state_27103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22500__auto__;
})()
;})(switch__22499__auto__,c__22559__auto__,msg_hist,msg_names,msg))
})();
var state__22561__auto__ = (function (){var statearr_27151 = f__22560__auto__.call(null);
(statearr_27151[(6)] = c__22559__auto__);

return statearr_27151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__,msg_hist,msg_names,msg))
);

return c__22559__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22559__auto___27218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___27218,ch){
return (function (){
var f__22560__auto__ = (function (){var switch__22499__auto__ = ((function (c__22559__auto___27218,ch){
return (function (state_27204){
var state_val_27205 = (state_27204[(1)]);
if((state_val_27205 === (1))){
var state_27204__$1 = state_27204;
var statearr_27206_27219 = state_27204__$1;
(statearr_27206_27219[(2)] = null);

(statearr_27206_27219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (2))){
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(4),ch);
} else {
if((state_val_27205 === (3))){
var inst_27202 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27204__$1,inst_27202);
} else {
if((state_val_27205 === (4))){
var inst_27192 = (state_27204[(7)]);
var inst_27192__$1 = (state_27204[(2)]);
var state_27204__$1 = (function (){var statearr_27207 = state_27204;
(statearr_27207[(7)] = inst_27192__$1);

return statearr_27207;
})();
if(cljs.core.truth_(inst_27192__$1)){
var statearr_27208_27220 = state_27204__$1;
(statearr_27208_27220[(1)] = (5));

} else {
var statearr_27209_27221 = state_27204__$1;
(statearr_27209_27221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (5))){
var inst_27192 = (state_27204[(7)]);
var inst_27194 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27192);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(8),inst_27194);
} else {
if((state_val_27205 === (6))){
var state_27204__$1 = state_27204;
var statearr_27210_27222 = state_27204__$1;
(statearr_27210_27222[(2)] = null);

(statearr_27210_27222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (7))){
var inst_27200 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27211_27223 = state_27204__$1;
(statearr_27211_27223[(2)] = inst_27200);

(statearr_27211_27223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (8))){
var inst_27196 = (state_27204[(2)]);
var state_27204__$1 = (function (){var statearr_27212 = state_27204;
(statearr_27212[(8)] = inst_27196);

return statearr_27212;
})();
var statearr_27213_27224 = state_27204__$1;
(statearr_27213_27224[(2)] = null);

(statearr_27213_27224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22559__auto___27218,ch))
;
return ((function (switch__22499__auto__,c__22559__auto___27218,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22500__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22500__auto____0 = (function (){
var statearr_27214 = [null,null,null,null,null,null,null,null,null];
(statearr_27214[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22500__auto__);

(statearr_27214[(1)] = (1));

return statearr_27214;
});
var figwheel$client$heads_up_plugin_$_state_machine__22500__auto____1 = (function (state_27204){
while(true){
var ret_value__22501__auto__ = (function (){try{while(true){
var result__22502__auto__ = switch__22499__auto__.call(null,state_27204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22502__auto__;
}
break;
}
}catch (e27215){if((e27215 instanceof Object)){
var ex__22503__auto__ = e27215;
var statearr_27216_27225 = state_27204;
(statearr_27216_27225[(5)] = ex__22503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27226 = state_27204;
state_27204 = G__27226;
continue;
} else {
return ret_value__22501__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22500__auto__ = function(state_27204){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22500__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22500__auto____1.call(this,state_27204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22500__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22500__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22500__auto__;
})()
;})(switch__22499__auto__,c__22559__auto___27218,ch))
})();
var state__22561__auto__ = (function (){var statearr_27217 = f__22560__auto__.call(null);
(statearr_27217[(6)] = c__22559__auto___27218);

return statearr_27217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___27218,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22499__auto__ = ((function (c__22559__auto__){
return (function (state_27232){
var state_val_27233 = (state_27232[(1)]);
if((state_val_27233 === (1))){
var inst_27227 = cljs.core.async.timeout.call(null,(3000));
var state_27232__$1 = state_27232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27232__$1,(2),inst_27227);
} else {
if((state_val_27233 === (2))){
var inst_27229 = (state_27232[(2)]);
var inst_27230 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27232__$1 = (function (){var statearr_27234 = state_27232;
(statearr_27234[(7)] = inst_27229);

return statearr_27234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27232__$1,inst_27230);
} else {
return null;
}
}
});})(c__22559__auto__))
;
return ((function (switch__22499__auto__,c__22559__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22500__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22500__auto____0 = (function (){
var statearr_27235 = [null,null,null,null,null,null,null,null];
(statearr_27235[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22500__auto__);

(statearr_27235[(1)] = (1));

return statearr_27235;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22500__auto____1 = (function (state_27232){
while(true){
var ret_value__22501__auto__ = (function (){try{while(true){
var result__22502__auto__ = switch__22499__auto__.call(null,state_27232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22502__auto__;
}
break;
}
}catch (e27236){if((e27236 instanceof Object)){
var ex__22503__auto__ = e27236;
var statearr_27237_27239 = state_27232;
(statearr_27237_27239[(5)] = ex__22503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27240 = state_27232;
state_27232 = G__27240;
continue;
} else {
return ret_value__22501__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22500__auto__ = function(state_27232){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22500__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22500__auto____1.call(this,state_27232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22500__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22500__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22500__auto__;
})()
;})(switch__22499__auto__,c__22559__auto__))
})();
var state__22561__auto__ = (function (){var statearr_27238 = f__22560__auto__.call(null);
(statearr_27238[(6)] = c__22559__auto__);

return statearr_27238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__))
);

return c__22559__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22499__auto__ = ((function (c__22559__auto__,figwheel_version,temp__5735__auto__){
return (function (state_27247){
var state_val_27248 = (state_27247[(1)]);
if((state_val_27248 === (1))){
var inst_27241 = cljs.core.async.timeout.call(null,(2000));
var state_27247__$1 = state_27247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27247__$1,(2),inst_27241);
} else {
if((state_val_27248 === (2))){
var inst_27243 = (state_27247[(2)]);
var inst_27244 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_27245 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_27244);
var state_27247__$1 = (function (){var statearr_27249 = state_27247;
(statearr_27249[(7)] = inst_27243);

return statearr_27249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27247__$1,inst_27245);
} else {
return null;
}
}
});})(c__22559__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__22499__auto__,c__22559__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto____0 = (function (){
var statearr_27250 = [null,null,null,null,null,null,null,null];
(statearr_27250[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto__);

(statearr_27250[(1)] = (1));

return statearr_27250;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto____1 = (function (state_27247){
while(true){
var ret_value__22501__auto__ = (function (){try{while(true){
var result__22502__auto__ = switch__22499__auto__.call(null,state_27247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22502__auto__;
}
break;
}
}catch (e27251){if((e27251 instanceof Object)){
var ex__22503__auto__ = e27251;
var statearr_27252_27254 = state_27247;
(statearr_27252_27254[(5)] = ex__22503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27255 = state_27247;
state_27247 = G__27255;
continue;
} else {
return ret_value__22501__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto__ = function(state_27247){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto____1.call(this,state_27247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22500__auto__;
})()
;})(switch__22499__auto__,c__22559__auto__,figwheel_version,temp__5735__auto__))
})();
var state__22561__auto__ = (function (){var statearr_27253 = f__22560__auto__.call(null);
(statearr_27253[(6)] = c__22559__auto__);

return statearr_27253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__,figwheel_version,temp__5735__auto__))
);

return c__22559__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__27256){
var map__27257 = p__27256;
var map__27257__$1 = (((((!((map__27257 == null))))?(((((map__27257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27257):map__27257);
var file = cljs.core.get.call(null,map__27257__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27257__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27257__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__27259 = "";
var G__27259__$1 = (cljs.core.truth_(file)?[G__27259,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__27259);
var G__27259__$2 = (cljs.core.truth_(line)?[G__27259__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__27259__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__27259__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__27259__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27260){
var map__27261 = p__27260;
var map__27261__$1 = (((((!((map__27261 == null))))?(((((map__27261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27261):map__27261);
var ed = map__27261__$1;
var exception_data = cljs.core.get.call(null,map__27261__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27261__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_27264 = (function (){var G__27263 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27263)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__27263;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_27264);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27265){
var map__27266 = p__27265;
var map__27266__$1 = (((((!((map__27266 == null))))?(((((map__27266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27266):map__27266);
var w = map__27266__$1;
var message = cljs.core.get.call(null,map__27266__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27268 = cljs.core.seq.call(null,plugins);
var chunk__27269 = null;
var count__27270 = (0);
var i__27271 = (0);
while(true){
if((i__27271 < count__27270)){
var vec__27278 = cljs.core._nth.call(null,chunk__27269,i__27271);
var k = cljs.core.nth.call(null,vec__27278,(0),null);
var plugin = cljs.core.nth.call(null,vec__27278,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27284 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27268,chunk__27269,count__27270,i__27271,pl_27284,vec__27278,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27284.call(null,msg_hist);
});})(seq__27268,chunk__27269,count__27270,i__27271,pl_27284,vec__27278,k,plugin))
);
} else {
}


var G__27285 = seq__27268;
var G__27286 = chunk__27269;
var G__27287 = count__27270;
var G__27288 = (i__27271 + (1));
seq__27268 = G__27285;
chunk__27269 = G__27286;
count__27270 = G__27287;
i__27271 = G__27288;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27268);
if(temp__5735__auto__){
var seq__27268__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27268__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27268__$1);
var G__27289 = cljs.core.chunk_rest.call(null,seq__27268__$1);
var G__27290 = c__4550__auto__;
var G__27291 = cljs.core.count.call(null,c__4550__auto__);
var G__27292 = (0);
seq__27268 = G__27289;
chunk__27269 = G__27290;
count__27270 = G__27291;
i__27271 = G__27292;
continue;
} else {
var vec__27281 = cljs.core.first.call(null,seq__27268__$1);
var k = cljs.core.nth.call(null,vec__27281,(0),null);
var plugin = cljs.core.nth.call(null,vec__27281,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27293 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27268,chunk__27269,count__27270,i__27271,pl_27293,vec__27281,k,plugin,seq__27268__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27293.call(null,msg_hist);
});})(seq__27268,chunk__27269,count__27270,i__27271,pl_27293,vec__27281,k,plugin,seq__27268__$1,temp__5735__auto__))
);
} else {
}


var G__27294 = cljs.core.next.call(null,seq__27268__$1);
var G__27295 = null;
var G__27296 = (0);
var G__27297 = (0);
seq__27268 = G__27294;
chunk__27269 = G__27295;
count__27270 = G__27296;
i__27271 = G__27297;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__27299 = arguments.length;
switch (G__27299) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__27300_27305 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__27301_27306 = null;
var count__27302_27307 = (0);
var i__27303_27308 = (0);
while(true){
if((i__27303_27308 < count__27302_27307)){
var msg_27309 = cljs.core._nth.call(null,chunk__27301_27306,i__27303_27308);
figwheel.client.socket.handle_incoming_message.call(null,msg_27309);


var G__27310 = seq__27300_27305;
var G__27311 = chunk__27301_27306;
var G__27312 = count__27302_27307;
var G__27313 = (i__27303_27308 + (1));
seq__27300_27305 = G__27310;
chunk__27301_27306 = G__27311;
count__27302_27307 = G__27312;
i__27303_27308 = G__27313;
continue;
} else {
var temp__5735__auto___27314 = cljs.core.seq.call(null,seq__27300_27305);
if(temp__5735__auto___27314){
var seq__27300_27315__$1 = temp__5735__auto___27314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27300_27315__$1)){
var c__4550__auto___27316 = cljs.core.chunk_first.call(null,seq__27300_27315__$1);
var G__27317 = cljs.core.chunk_rest.call(null,seq__27300_27315__$1);
var G__27318 = c__4550__auto___27316;
var G__27319 = cljs.core.count.call(null,c__4550__auto___27316);
var G__27320 = (0);
seq__27300_27305 = G__27317;
chunk__27301_27306 = G__27318;
count__27302_27307 = G__27319;
i__27303_27308 = G__27320;
continue;
} else {
var msg_27321 = cljs.core.first.call(null,seq__27300_27315__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_27321);


var G__27322 = cljs.core.next.call(null,seq__27300_27315__$1);
var G__27323 = null;
var G__27324 = (0);
var G__27325 = (0);
seq__27300_27305 = G__27322;
chunk__27301_27306 = G__27323;
count__27302_27307 = G__27324;
i__27303_27308 = G__27325;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27330 = arguments.length;
var i__4731__auto___27331 = (0);
while(true){
if((i__4731__auto___27331 < len__4730__auto___27330)){
args__4736__auto__.push((arguments[i__4731__auto___27331]));

var G__27332 = (i__4731__auto___27331 + (1));
i__4731__auto___27331 = G__27332;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27327){
var map__27328 = p__27327;
var map__27328__$1 = (((((!((map__27328 == null))))?(((((map__27328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27328):map__27328);
var opts = map__27328__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27326){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27326));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e27333){if((e27333 instanceof Error)){
var e = e27333;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e27333;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__27334){
var map__27335 = p__27334;
var map__27335__$1 = (((((!((map__27335 == null))))?(((((map__27335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27335):map__27335);
var msg_name = cljs.core.get.call(null,map__27335__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1625262226379
