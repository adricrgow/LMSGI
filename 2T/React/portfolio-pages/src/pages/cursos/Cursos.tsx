const getCursos = async () => {
    const { data, error } = await supabase
      .from('cursos')
      .select('*')
      
      console.log(data)
      if (error) {
        console.error(error)
        return
      }

}
getCursos()


return ({}
      <h1>Cursos</h1>
  )