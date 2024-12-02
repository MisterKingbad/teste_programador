<?php
    namespace App\http\Controllers;
    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use App\Comunicado;

    class ComunicadoController extends Controller
    {
        public function index()
        {
            return Comunicado::all();
        }
    
        public function store(Request $request)
        {
            $comunicado = Comunicado::create($request->all());
            return response()->json($comunicado, 201);
        }
    
        public function update(Request $request, $id)
        {
            $comunicado = Comunicado::findOrFail($id);
            $comunicado->update($request->all());
            return response()->json($comunicado, 200);
        }
    
        public function republicar($id)
        {
            $comunicado = Comunicado::findOrFail($id);
            $comunicado->update(['data_publicacao' => now(), 'publicado' => true]);
            return response()->json($comunicado, 200);
        }
    
        public function destroy($id)
        {
            Comunicado::destroy($id);
            return response()->json(null, 204);
        }
    }
