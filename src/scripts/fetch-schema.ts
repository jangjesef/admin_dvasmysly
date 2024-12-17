import { createClient } from '@supabase/supabase-js'

// Zde prosím vložte vaše Supabase URL a anon key
const supabaseUrl = 'https://rvsdjcpgqewopasmclqz.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchSchema() {
  // Získat seznam všech tabulek
  const { data: tables, error: tablesError } = await supabase
    .from('information_schema.tables')
    .select('table_name')
    .eq('table_schema', 'public')
  
  if (tablesError) {
    console.error('Error fetching tables:', tablesError)
    return
  }

  console.log('Found tables:', tables?.map(t => t.table_name))

  // Pro každou tabulku získat její strukturu
  for (const table of tables || []) {
    const { data: columns, error: columnsError } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type, is_nullable')
      .eq('table_schema', 'public')
      .eq('table_name', table.table_name)

    if (columnsError) {
      console.error(`Error fetching columns for ${table.table_name}:`, columnsError)
      continue
    }

    console.log(`\nTable: ${table.table_name}`)
    console.log('Columns:', columns)
  }
}

fetchSchema()
