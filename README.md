<h1>Accordion realizado con Vanilla JS + CSS. </h1>

Como usarlo?<br>
1) Incluir los archivos :<br>
```
<link href="accordion.css">
<script src="accordion.js"></script>
```

2) Usar esta estructura en tu HTML
```
<div id="jsa">
	<!-- contenido1 -->
	<div class="jsaitem"> 
		<div class="jsatitle">Titulo</div>
		<div class="jsacontent">Contenido</div>
	</div>
	<!-- contenido2 -->
	<div class="jsaitem"> 
		<div class="jsatitle"> <span class="masmenos"></span> Titulo</div>
		<div class="jsacontent">Contenido</div>
	</div>
</div>

```
.masmenos es opcional, es para que aparezca el signo indicando si hay o no contenido oculto.
Se puede modicicar el signo desde el CSS
