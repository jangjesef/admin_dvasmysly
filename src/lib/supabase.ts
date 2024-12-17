import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Helper funkce pro získání dat z tabulky
export async function fetchTableData<T extends keyof Database['public']['Tables']>(
  tableName: T
): Promise<Database['public']['Tables'][T]['Row'][] | null> {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
  
  if (error) {
    console.error('Error:', error)
    return null
  }
  
  return data
}

// Helper funkce pro vložení dat do tabulky
export async function insertData<T extends keyof Database['public']['Tables']>(
  tableName: T,
  data: Partial<Database['public']['Tables'][T]['Row']>
) {
  const { error } = await supabase
    .from(tableName)
    .insert(data)
  
  if (error) {
    console.error('Error:', error)
    return false
  }
  
  return true
}

// Helper funkce pro aktualizaci dat v tabulce
export async function updateData<T extends keyof Database['public']['Tables']>(
  tableName: T,
  id: number,
  data: Partial<Database['public']['Tables'][T]['Row']>
) {
  const { error } = await supabase
    .from(tableName)
    .update(data)
    .eq('id', id)
  
  if (error) {
    console.error('Error:', error)
    return false
  }
  
  return true
}

// Helper funkce pro smazání dat z tabulky
export async function deleteData(tableName: string, id: number) {
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('id', id)
  
  if (error) {
    console.error('Error:', error)
    return false
  }
  
  return true
}
