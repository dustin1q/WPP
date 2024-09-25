---

title: Animate On Scroll 
image: ""
desc: CSS only, elements are animated when the page is scrolled and they enter the viewport. 
---

<html-code>
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
  <div>13</div>
  <div>14</div>
  <div>15</div>
  <div>16</div>
  <div>17</div>
  <div>18</div>
  <div>19</div>
  <div>20</div>
  <div>21</div>
  <div>22</div>
  <div>23</div>
  <div>24</div>
  <div>25</div>
  <div>26</div>
  <div>27</div>
  <div>28</div>
  <div>29</div>
  <div>30</div>
</div>
</html-code>

<css-code>

@keyframes appear{
  from{
    opacity:0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
.container{
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  color: white;
  align-items: center;
  justify-content: center;
}
.container div:nth-last-child(2n){ 
  background-color: rgb(157, 158, 158);
}
.container div{
  width: 100px;
  height: 100px;
  margin: .2em;
  padding-top:.7em;
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0;
  background-color: rgb(0, 0, 0);
}

</css-code>


