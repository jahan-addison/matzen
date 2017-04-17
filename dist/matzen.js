"use strict";Object.defineProperty(exports,"__esModule",{value:!0});function identity(c){return c}class Value{static toValue(c){return new Value(Array.prototype.concat.call([],c))}constructor(c){this.x=c}eq(c){return this.x.reduce((d,f,h,j)=>!1!==d&&j[h]===c.read()[h],!0)}map(c){return new Value(this.x.map(c))}apply(c){return Value.toValue(c(1<this.x.length?this.x:this.x[0]))}read(){return this.x}}exports.Value=Value;class Match{constructor(c,d=!1){this.x=c,this.matched=!1,this.fallthrough=d,this.value=Value.toValue(c)}case(c,d,f=!1){return"boolean"==typeof c?c&&this.isFallable(f)&&(this.matched=!0,this.value=this.value.apply(d)):this.value.eq(Value.toValue(c))&&this.isFallable(f)&&(this.matched=!0,this.value=this.value.apply(d)),this}default(c=identity){return this._(c)}_(c=identity){return this.matched||(this.value=c?this.value.apply(c):this.value.apply(identity)),1<this.value.read().length?this.value.read():this.value.read()[0]}isFallable(c){return!this.matched||c||this.fallthrough}get val(){return this.x}}exports.Match=Match;function match(c,d,f=!1){const h=Array.prototype.concat.call([],c),j=new Match(h,f);return d.call(j,j,c)}exports.match=match;
